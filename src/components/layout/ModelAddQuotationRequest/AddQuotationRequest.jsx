import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import Modal from "@/components/shared/SharedModal";
import { svgIcons } from "@/components/shared/svgIcons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Download, Eye } from "lucide-react";
import { useState } from "react";
import { usePDF } from "react-to-pdf";
import CustomStepper from "./CustomStepper/CustomStepper";
import OfferConditionsStep from "./CustomStepper/OfferConditionsStep";
import RecipientEntityStep from "./CustomStepper/RecipientEntityStep";
import SelectItemsStep from "./CustomStepper/SelectItemsStep";

function ConfirmationStep({ formData }) {
  const [showModal, setShowModal] = useState(false);
  const { toPDF, targetRef } = usePDF({
    filename: "tax-invoice.pdf",
    page: {
      format: "A4",
      orientation: "portrait",
      margin: 10,
    },
  });

  const invoiceData = {
    companyName: "Genius trading systems company",
    companyNameArabic: "شركة النظم العبقرية للتجارة",
    invoiceTitle: "TAX INVOICE",
    invoiceTitleArabic: "فاتورة ضريبية",
    invoiceDate: "2025/06/22",
    invoiceNo: "0072",
    companyAddress: "Riyadh - AlMalaz - Farazdk ST",
    companyAddressArabic: "الرياض - الملز - شارع الفرزدق",
    companyTel: "011-2791043",
    companyFax: "011-4160040",
    companyVatNo: "311129268800003",
    customerName: "شركة مسكن ترف للخدمات العقارية",
    customerAddress:
      "2975 الرياض حي القيروان شارع الامير سعود بن عبدالله بن جلوي 13533 - 9207",
    customerVatNo: "311762158300003",
    items: [
      {
        id: 1,
        description:
          "رسوم تفعيل وربط واتس اب API Business مع نظام بتركس بالاضافة الى بناء هيكلية تشات بوت خاصة",
        qty: 1.0,
        unit: "عدد",
        price: 6002.61,
        totalBeforeVat: 6002.61,
      },
    ],
    totalBeforeVat: 6002.61,
    discount: 0.0,
    totalTaxVat: 900.39,
    netTotal: 6903.0,
    amountInWordsArabic: "فقط ستة آلاف وتسعمائة وثلاثة ريال سعودي",
    amountInWordsEnglish: "Only Six Thousands & Nine Hundred Three Saudi Riyal",
    commercialRegistration: "Commercial Registration:1010817300",
    commercialRegistrationArabic: "رقم السجل التجاري : 1010817300",
  };

  const data = {
    date: formData.date || "2025-07-30",
    recipientEntity: formData.recipientEntity || "سعي",
    offerConditions: formData.offerConditions || "دفعتين في السنة",
    publicConditions: formData.publicConditions || ["شرط واحد", "شرط 2"],
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-primary border-b pb-3 mb-4">
          تفاصيل العرض
        </h2>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <DetailItem label="تاريخ العرض" value={data.date} />
            <DetailItem label="جهة المستلم" value={data.recipientEntity} />
          </div>

          <div className="border-t border-b border-gray-100 py-4">
            <DetailItem
              label="شروط العرض"
              value={data.offerConditions}
              withEyeIcon
              onEyeClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>

      <div id="pdf-content" className="pdf-content-hidden">
        <div ref={targetRef} className="invoice-wrapper">
          <h1 className="invoice-title">فاتورة عرض سعر</h1>

          {/* معلومات التاريخ */}
          <div className="invoice-header">
            <div>
              <p>
                <strong>تاريخ العرض:</strong> {formData.date || "2025-07-30"}
              </p>
            </div>
            <div>
              <p>
                <strong>رقم العرض:</strong> INV-
                {formData.invoiceNumber || "125050"}
              </p>
            </div>
          </div>

          {/* جهة المستلم */}
          <div className="invoice-section">
            <h2 className="section-title">جهة المستلم</h2>
            <p>{formData.recipientEntity || "سعي"}</p>
          </div>

          {/* شروط العرض */}
          <div className="invoice-section">
            <h2 className="section-title">شروط العرض</h2>
            <p>{formData.offerConditions || "دفعتين في السنة"}</p>
          </div>

          {/* الشروط العامة */}
          <div className="invoice-section">
            <h2 className="section-title">الشروط العامة</h2>
            <ul>
              {(formData.publicConditions || ["شرط واحد", "شرط 2"]).map(
                (condition, index) => (
                  <li key={index}>{condition}</li>
                )
              )}
            </ul>
          </div>

          {/* تذييل الفاتورة */}
          <div className="invoice-footer">
            <p>شكراً لاختياركم خدماتنا</p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-primary border-b pb-3 mb-6 text-center">
            تفاصيل العرض الكاملة
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailItem label="تاريخ العرض" value={data.date} />
              <DetailItem label="جهة المستلم" value={data.recipientEntity} />
            </div>

            <DetailItem label="شروط العرض" value={data.offerConditions} />

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-primary mb-3 text-lg">
                الشروط العامة:
              </h3>
              <ul className="space-y-2 pl-5">
                {data.publicConditions.map((condition, index) => (
                  <li key={index} className="text-primary list-disc">
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Download
                className="w-6 h-6 text-primary"
                onClick={() => toPDF()}
              />

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border bg-secondary border-gray-300 rounded-md hover:bg-secondary/80 transition-colors"
              >
                إغلاق
              </button>
              <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors">
                تأكيد العرض
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

function DetailItem({ label, value, withEyeIcon, onEyeClick }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        {withEyeIcon && (
          <button
            onClick={onEyeClick}
            className="text-primary hover:text-primary-dark flex items-center gap-1"
          >
            <Eye className="w-4 h-4" />
            <span className="text-xs">عرض التفاصيل</span>
          </button>
        )}
      </div>
      <p className="font-medium text-primary">{value}</p>
    </div>
  );
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    recipientEntity: "",
    offerConditions: "",
    publicConditions: [],
    date: "",
  });

  const stepComponents = [
    <RecipientEntityStep
      key="step0"
      formData={formData}
      setFormData={setFormData}
    />,
    <OfferConditionsStep
      key="step1"
      formData={formData}
      setFormData={setFormData}
    />,
    <SelectItemsStep
      key="step2"
      formData={formData}
      setFormData={setFormData}
    />,
    <ConfirmationStep key="step3" formData={formData} />,
  ];

  const stepperSteps = [
    { label: "جهة موجهة" },
    { label: "شروط العرض" },
    { label: "اختيار البنود" },
    { label: "تأكيد" },
  ];

  const handleNext = () => {
    if (currentStep < stepComponents.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setCurrentStep(0);
  };

  return (
    <Card className="px-4 border-0 shadow-none min-h-screen bg-background ">
      <HeaderPopup PageName={"اضافه سعر"} icon={svgIcons.ordersIcon} />
      <CardHeader className="container mx-auto">
        <div className="mt-4">
          <CustomStepper steps={stepperSteps} currentStep={currentStep} />
        </div>
      </CardHeader>
      <CardContent className="py-6 min-h-[400px] container mx-auto">
        {stepComponents[currentStep]}
      </CardContent>
      <CardFooter className="flex justify-between pt-4 container mx-auto">
        {currentStep > 0 && (
          <Button className={"bg-secondary"} onClick={handlePrevious}>
            السابق
          </Button>
        )}
        {currentStep < stepComponents.length - 1 ? (
          <Button onClick={handleNext} className="mr-auto bg-secondary">
            التالي
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="mr-auto bg-secondary ">
            تأكيد
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
