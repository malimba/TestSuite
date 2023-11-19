from django.db import models
from ckeditor.fields import RichTextField
# Questions model
class Questions(models.Model):
    id = models.AutoField(primary_key=True, blank=False, null=False)
    display_uuid = models.CharField(unique=True, max_length=32, blank=False, null=False)
    question_text = RichTextField()
    has_image = models.BooleanField(default=False)
    #queston type choices
    QUESTION_TYPES = (
            ('MULT', 'MULTIPLE CHOICE'),
            ('INPUT', 'INPUT CHOICE')
            )
    question_type = models.CharField(max_length=5, choices=QUESTION_TYPES, blank=False, null=False)
    feedback = models.ImageField(upload_to='images/questionIMages/% Y/% m/% d/', max_length=100)
    is_ai_asstd = models.BooleanField(default=False)
    #TODO: write logic linking questions to answers
    
    def __str__(self):
        return self.question_text

#answe model
class Answers(models.Model):
    id = models.AutoField(primary_key=True, blank=False, null=False)
    question_id = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer_text = RichTextField()
    has_image = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text
