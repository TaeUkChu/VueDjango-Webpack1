# Generated by Django 3.2.12 on 2023-03-31 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_alter_post_check_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='check_img',
            field=models.BooleanField(default=False),
        ),
    ]