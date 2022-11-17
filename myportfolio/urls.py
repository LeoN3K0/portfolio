from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio, name='portfolio'),
    path('resume/', views.resume, name='resume'),
    path('download/<file_name>', views.download, name='download'),
]