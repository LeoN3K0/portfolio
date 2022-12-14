# Generated by Django 4.1 on 2022-11-15 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0003_portfolio_about1_portfolio_about2'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnails', models.ImageField(default='default.png', upload_to='project_thumbnails')),
                ('name', models.CharField(max_length=150, verbose_name='Name')),
                ('description', models.TextField(verbose_name='Description')),
                ('link', models.URLField(blank=True, max_length=500)),
            ],
        ),
    ]
