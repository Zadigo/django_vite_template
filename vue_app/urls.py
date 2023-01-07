from django.urls import path
from vue_app import views

urlpatterns = [
    path('', views.index, name='index_view'),
]
