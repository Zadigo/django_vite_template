from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('vue_app.urls')),
    path('__debug__/', include('debug_toolbar.urls')),
    path('admin/', admin.site.urls),
]
