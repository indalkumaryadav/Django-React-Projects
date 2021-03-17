from django.urls import path,include
from rest_framework import routers
from .views import CompanyViewSet,CompanyBankViewset
from . import views
from .views import CompanyNameViewSet, CompanyOnlyViewSet,MedicineByNameViewSet
router =routers.DefaultRouter()

router.register("company",views.CompanyViewSet,basename="company")
router.register("companybank",views.CompanyBankViewset,basename="companybank")
router.register("medicine",views.MedicineViewSet,basename="medicine")
router.register("companyaccount",views.CompanyAccountViewset,basename="companyaccount")
router.register("employee",views.EmployeeViewset,basename="employee")
router.register("employee_all_bank",views.EmployeeBankViewset,basename="employee_all_bank")
router.register("employee_all_salary",views.EmployeeSalaryViewset,basename="employee_all_salary")
router.register("generate_bill_api",views.GenerateBillViewSet,basename="generate_bill_api")
router.register("customer_request",views.CustomerRequestViewset,basename="customer_request")
router.register("home_api",views.HomeApiViewset,basename="home_api")

urlpatterns = [
    path('', include(router.urls)),
]
