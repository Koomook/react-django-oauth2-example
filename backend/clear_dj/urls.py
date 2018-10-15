from django.conf.urls import url, include
from django.contrib import admin

from dog.views import DogList

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^auth/', include('rest_framework_social_oauth2.urls')),
    url(r"^dogs/$", DogList.as_view()),
    url(r"^", include("github_social.urls")),
    # url(r'social_django/', include('social_django.urls', namespace='social_django'))
]

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls')),
]
