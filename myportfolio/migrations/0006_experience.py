# Generated by Django 4.1 on 2022-11-16 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0005_projects_datestarted'),
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Work Title')),
                ('business', models.CharField(max_length=150, verbose_name='Business')),
                ('start_date', models.DateField(verbose_name='Date Started')),
                ('end_date', models.DateField(blank=True, verbose_name='Date Ended')),
                ('is_current', models.BooleanField(blank=True, verbose_name='Is Current')),
                ('short_description', models.TextField(verbose_name='Description')),
            ],
        ),
    ]
