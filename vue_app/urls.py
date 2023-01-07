from django.urls import path
from vue_app import views

app_name = 'vue_app'

urlpatterns = [
    path('', views.index, name='home_view'),
]
