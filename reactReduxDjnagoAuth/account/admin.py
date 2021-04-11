from django.contrib import admin
from .models import User
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    ordering = ('-start_date',)
    list_display = ('email', 'is_active', 'is_staff')
    search_fields = ('eamil',)
    list_filter = ('email', 'is_active')

    fieldsets = (
        (None, {'fields': ('email','password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
       

    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active', 'is_staff'),
        }),
    )
admin.site.register(User,UserAdmin)