from django.db import models
from django.contrib.auth.models import AbstractBaseUser

#security
from werkzeug.security import generate_password_hash

# Create your models here.

#user model
class User(AbstractBaseUser):
    '''USER MODEL TO HANDLE ALL SYSTEM USERS'''
    id = models.AutoField(primary_key=True, blank=False, null=False)
    fullname = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    #level of user
    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    if_authentificated = models.BooleanField(default=False)

    #timestamps
    created_at = models.DateTimeField(auto_now=True, null=False)
    updated_at = models.DateTimeField(auto_now=True, null=False)

    #FIELDS
    USERNAME_FIELD = 'email'
    #REQUIRED FIELDS FOR FORMS
    REQUIRED_FIELDS = ['fullname', 'email', 'password']

    #hasing password
    def hash_password(self):
        hash = generate_password_hash(self.password, method='pbkdf2:sha256', salt_length=8)
        self.password = hash

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

#payment model
class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #todo: subscription_type- based on subscriptions provided by company
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)

#subscription model
class Subscription(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now=True, null=False) #set it to auto now so once entry is made will update itself
    end_date = models.DateTimeField()

