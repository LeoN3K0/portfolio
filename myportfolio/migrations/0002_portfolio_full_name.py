# Generated by Django 4.1 on 2022-11-14 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='full_name',
            field=models.CharField(default=1, max_length=150, verbose_name='Full Name'),
            preserve_default=False,
        ),
    ]
