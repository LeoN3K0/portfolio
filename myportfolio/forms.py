from django import forms


class ContactForm(forms.Form):
    full_name = forms.CharField()
    email = forms.EmailField()
    phone = forms.CharField()
    message = forms.CharField()

    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['full_name'].widget = forms.TextInput(attrs={
            'id': 'name',
            'class': 'form-control',
            'placeholder': 'Enter your name...',
            'data-sb-validations': 'required'})
        self.fields['email'].widget = forms.TextInput(attrs={
            'id': 'email',
            'type': 'email',
            'class': 'form-control',
            'placeholder': 'name@example.com',
            'data-sb-validations': 'required,email'})
        self.fields['phone'].widget = forms.TextInput(attrs={
            'id': 'phone',
            'type': 'tel',
            'class': 'form-control',
            'placeholder': '(123) 456-7890',
            'data-sb-validations': 'required'})
        self.fields['message'].widget = forms.Textarea(attrs={
            'id': 'message',
            'type': 'text',
            'class': 'form-control',
            'placeholder': 'Enter your message here...',
            'style': 'height: 10rem',
            'data-sb-validations': 'required'})
