from django.contrib import admin
from .models import ChaiVarity, ChaiCertificate, ChaiReviews, Store

# Register your models here.

class ChaiReviewInline(admin.TabularInline):
  model = ChaiReviews
  extra = 2

class ChaiVarityAdmin(admin.ModelAdmin):
  list_display = ('name', 'type', 'date_added')
  inlines = [ChaiReviewInline]

class StoreAdmin(admin.ModelAdmin):
  list_display = ('name', 'location')
  filter_horizontal = ('chai_varity',)

class ChaiCertificateAdmin(admin.ModelAdmin):
  list_display = ('chai', 'certificate_number', 'issue_date', 'valid_until')

admin.site.register(ChaiVarity, ChaiVarityAdmin)
admin.site.register(Store, StoreAdmin)
admin.site.register(ChaiCertificate, ChaiCertificateAdmin)