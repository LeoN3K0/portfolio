import os
from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.core.mail import send_mail, BadHeaderError
from django.core.paginator import Paginator
from wsgiref.util import FileWrapper
import mimetypes
from .models import Portfolio, Projects, Experience, Education
from .forms import ContactForm


def portfolio(request):
    profile = Portfolio.objects.get(user__username='erich.malberg')
    project = Projects.objects.all().order_by('-datestarted')
    paginator = Paginator(project, 3)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = request.POST['full_name']
            email = request.POST['email']
            phone = request.POST['phone']
            message = request.POST['message']
            subject = f"From Portfolio Contact Form - {name} is interested"
            email_template_name = "contact_template.txt"
            c = {
                'name': name,
                "email": email,
                "phone": phone,
                "message": message,
            }
            email = render_to_string(email_template_name, c)
            try:
                send_mail(subject, email, 'erich.malberg@gmail.com', ['erich.malberg@live.com'], fail_silently=False)
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect("portfolio")
    else:
        form = ContactForm()

    context = {
        'profile': profile,
        'project': page_obj,
        'form': form,
    }

    return render(request, 'base_portfolio.html', context)


def resume(request):
    profile = Portfolio.objects.get(user__username='erich.malberg')
    work = Experience.objects.all().order_by('-start_date')[:6]
    school = Education.objects.all().order_by('-start_date')[:6]
    context = {
        'profile': profile,
        'work': work,
        'school': school,
    }
    return render(request, 'base_resume.html', context)


def download(request,file_name):
    file_path = settings.MEDIA_ROOT +'/resume/'+ file_name
    file_wrapper = FileWrapper(open(file_path,'rb'))
    file_mimetype = mimetypes.guess_type(file_path)
    response = HttpResponse(file_wrapper, content_type=file_mimetype)
    response['X-Sendfile'] = file_path
    response['Content-Length'] = os.stat(file_path).st_size
    response['Content-Disposition'] = 'attachment; filename=%s' % str(file_name)
    return response