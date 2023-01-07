from django.shortcuts import render
from inertia import render


def index(request):
    return render(request, 'Index', props={'pageName': 'World'})


# def about(request):
#     return render(request, 'About', props={'pageName': 'About'})


# def with_router(request):
#     return render(request, 'layouts/WithRouter')
