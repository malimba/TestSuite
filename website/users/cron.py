#cron file to handle scheduled tasks

#imports
from django.core.management.base import BaseCommand
from datetime import date
from .models import Subscription

class SubscriptionCron(BaseCommand):
    help = 'Check and terminate expired subscriptions'
    def handle(self, *args, **kwargs):
        today = date.today()
        expired_subscriptiions = Subscription.objects.filter(end_date=today)
        for subscription in expired_subscriptiions:
            pass