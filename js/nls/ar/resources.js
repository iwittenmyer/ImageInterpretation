/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "يتعذر إنشاء الخريطة"
  },
  "nav": {
    "close": "إغلاق"
  },
  "basemap": {
    "title": "معرض خرائط الأساس"
  },
  "operationalLayers": {
    "title": "طبقات جاهزة للعمل",
    "error": "لا توجد طبقات تشغيلية في خريطة الويب."
  },
  "layerSelector": {
    "active": "الطبقة النشطة",
    "comparison": "طبقة المقارنة",
    "other": "أخرى",
    "result": "النتيجة",
    "title": "محدد الطبقة",
    "resultSave": "إضافة الطبقة الناتجة إلى قائمة طبقات المقارنة",
    "copy": "نسخ الطبقة النشطة في طبقة المقارنة.",
    "swap": "سحب الطبقة النشطة وطبقة المقارنة."
  },
  "renderer": {
    "title": "العارض",
    "stretch": "معلمات التمدُّد",
    "stretchType": "نوع التمدد",
    "dra": "DRA",
    "draText": "تحسين تحديثات تعديل النطاق الديناميكي بناءً على العرض الحالي",
    "gamma": "جاما",
    "apply": "تطبيق",
    "top": "استبعاد الأعلى",
    "bottom": "استبعاد الأسفل",
    "topText": " استبعاد نسبة x المئوية العلوية في المدرج التكراري",
    "bottomText": " استبعاد نسبة x المئوية السفلية في المدرج التكراري",
    "stdDev": "# من الانحراف المعياري",
    "layer": "الطبقة الحالية",
    "error": "لا توجد طبقات صور مرئية في الخريطة."
  },
  "imageSelector": {
    "title": "محدد الصور",
    "enable": "تمكين محدد الصور",
    "secondary": "تعيين النشطة كطبقة مقارنة",
    "dropDown": "عرض الصور في قائمة منسدلة.",
    "refresh": "تحديث الاستعلام بناءً على المدى الحالى.",
    "show": "إظهار",
    "age": "العُمر",
    "zoom": "تكبير لتحديد الصور.",
    "error": "لا توجد طبقات صور مرئية في الخريطة.",
    "error1": "اسم الحقل غير مُحدد.",
    "error2": "لا يوجد حقل OBJECTID.",
    "error3": "لا يوجد حقل فئة.",
    "error4": "يتعذر تنفيذ إجراء في هذه الطبقة.",
    "error5": "الخدمات التي تسبق الإصدار 10.2.1 غير مدعومة.",
    "error6": "لا توجد مشاهد في المدى الحالي.",
    "error7": "عدد الآثار المحددة يتجاوز 20، ولن يتم عرض إلا أول 20 منها. اضغط على موافق لعدم التحذير مجددًا.",
    "slider": "عرض الصور على شريط التمرير."
  },
  "changeDetection": {
    "title": "تغيير الاكتشاف",
    "mode": "وضع",
    "method": "الطريقة",
    "positive": "اختلاف إيجابي",
    "negative": "اختلاف سلبي",
    "threshold": "عتبة",
    "difference": "اختلاف",
    "apply": "تطبيق",
    "error": "يعمل تحديد التغيير مع صورتين من تاريخين مختلفين من نفس الخدمة.<br />استخدم محدد الصورة أولاً لتحديد صورة واحدة،<br />ثم انقر على زر <img src='images/down.png' height='14'/> ثم حدد الصورة الثانية.<br />ارجع إلى عنصر التحكم للمتابعة في تحديد التغيير."
  },
  "editor": {
    "title": "المحرر",
    "error": "لم يتم تحديد أي طبقة تحرير.",
    "error1": "تم رفض الوصول. يتعذر تحرير الطبقات."
  },
  "measurement": {
    "title": "قياس الصورة",
    "error": "إمكانات القياس غير مدعومة."
  },
  "export": {
    "title": "تصدير",
    "mode": "وضع",
    "titleText": "عنوان",
    "description": "الوصف",
    "tags": "علامات",
    "submit": "إرسال",
    "pixel": "حجم البكسل",
    "outsr": "الإسناد المكاني الناتج",
    "renderer": "أداة العرض الحالية",
    "extent": "تعريف المدى",
    "text": "إذا تم التأشير على أداة العرض الحالية، يتم تصدير العارض<br /> وإلا يتم تصدير<br/>قيم البيانات الأصلية.",
    "error": "لا توجد طبقات صور مرئية على الخريطة.",
    "error1": "العنوان مطلوب.",
    "error2": "العلامة/العلامات مطلوبة"
  },
  "compare": {
    "title": "مقارنة",
    "slider": "شريط تمرير الشفافية",
    "hSwipe": "سحب أفقي",
    "vSwipe": "سحب رأسي",
    "error": "لا توجد طبقات صور مرئية للمقارنة."
  }
});