from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Portfolio(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField("Full Name", max_length=150)
    about1 = models.TextField('About1', blank=True)
    about2 = models.TextField('About2', blank=True)

    avatar = models.ImageField(default='default.jpg', upload_to='profile_images')

    def __str__(self):
        return self.full_name

    def save(self, *args, **kwargs):
        super().save()

        img = Image.open(self.avatar.path)

        if img.height > 400 or img.width > 400:
            new_img = (400, 400)
            img.thumbnail(new_img)
            img.save(self.avatar.path, quality=200)


class Projects(models.Model):
    thumbnails = models.ImageField(default='default.png', upload_to='project_thumbnails')
    name = models.CharField('Name', max_length=150)
    description = models.TextField('Description')
    link = models.URLField(max_length=500, blank=True)
    datestarted = models.DateTimeField('Date Started')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save()

        img = Image.open(self.thumbnails.path)

        if img.height > 1000 or img.width > 1000:
            new_img = (1000, 1000)
            img.thumbnail(new_img)
            img.save(self.thumbnails.path, quality=1000)


class Experience(models.Model):
    title = models.CharField('Work Title', max_length=150)
    business = models.CharField('Business', max_length=150)
    start_date = models.DateTimeField('Date Started')
    end_date = models.DateTimeField('Date Ended', blank=True, null=True)
    is_current = models.BooleanField('Is Current', blank=True)
    short_description = models.TextField('Description')

    def __str__(self):
        return self.business


class Education(models.Model):
    school = models.CharField('School', max_length=150)
    degree = models.CharField('Degree', max_length=150, blank=True)
    field = models.CharField('Field', max_length=150, blank=True)
    track = models.CharField('Track', max_length=150, blank=True)
    start_date = models.DateTimeField('Date Started')
    end_date = models.DateTimeField('Date Ended', blank=True, null=True)
    is_current = models.BooleanField('Is Current', blank=True)
    gpa = models.CharField('GPA', max_length=5, blank=True)

    def __str__(self):
        return self.school




