jQuery(document).ready(function($) {

	// Add explanatory text to register page
	$('.demographic').addClass('test');
	
	$('.page-user-register.i18n-en section.demographic').prepend('<p id="explanatory-text">Because Oregon\'s Kitchen Table provides public feedback to decision-makers on public issues, we are transparent about how well participants on consultations reflect all Oregonians and where there may be gaps in representation. We aggregate the results so we can demonstrate how close or how far respondents are to or from a representative sample.  No individual\'s personal information (such as names, emails, phone numbers, or addresses) are tied to responses, and your information is kept private and confidential. <a href="http://oregonskitchentable.org/privacy-policy/" title="Oregon\'s Kitchen Table Privacy Policy"><strong>Privacy Policy</strong></a></p>');
	
	$('.page-user-register.i18n-en form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">A welcome message will be sent to your email with a link to set up your password.</p>');
	
	$('.page-user-register.i18n-ru section.demographic').prepend('<ul id="explanatory-text"><li>Мы обрабатываем результаты анкет и используем эту демографическую информацию, предоставленную каждым респондентом, чтобы показать насколько хорошо ответы на вопросы анкеты отражают разнообразие опрошенного населения.</li><li>Никакая личная информация (как например, имена/фамилии, адреса email, телефонные номера или адреса) не связана с ответами на вопросы анкеты и никому не передаётся.</li><li>Мы работаем с компанией DHM Research, объективной портлендской фирмой, исследующей общественное мнение, чтобы провести наши консультации и анализ данных.</li></ul>');
	
	$('.page-user-register.i18n-ru form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">Вам будет отправлено "Добро Пожаловать"сообщение на адрес электронной почты со ссылкой для установления пароля</p>');
	
	$('.page-user-register.i18n-es section.demographic').prepend('<ul id="explanatory-text"><li>Nosotros agrupamos los resultados de la encuesta y usamos la información demográfica ofrecida por cada encuestado para mostrar cuan bien las respuestas de la encuesta reflejan la diversidad de la población encuestada.</li><li>Ninguna información personal (como nombres, correos electrónicos, números de teléfono o direcciones) estarán vinculados a las respuestas de la encuesta y no serán divulgados.</li><li>Trabajamos con DHM Research, una compañía ubicada en Portland dedicada a la  opinión pública no partidista para llevar a cabo nuestras consultas y análisis.</li></ul>');
	
	$('.page-user-register.i18n-es form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">Pronto recibirá un mensaje de bienvenida a su correo electrónico con un enlace para ingresar y crear su propia contraseña.</p>');
	
	$('.page-user-register.i18n-zh-hans section.demographic').prepend('<ul id="explanatory-text"><li>我們彙集我們的調查結果，並使用每個調查者所提供的人口統計資料來表明調查結果.如何反映了調查種群的多樣性。</li><li>沒有個人資訊 （如姓名、 電子郵件、 電話號碼或位址）告示在調查上，或共用。</li><li>我們一起與 DHM 研究、在波特蘭市的非黨派的公眾輿論研究公司來進行磋商和分析。</li></ul>');
	
	$('.page-user-register.i18n-zh-hans form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">您会收到包含密码设置链接的欢迎信息。</p>');
	
	$('.page-user-register.i18n-vi section.demographic').prepend('<ul id="explanatory-text"><li>Chúng tôi tập họp các kết quả của cuộc thăm dò và sử dụng các thông tin cá nhân được cung cấp từ mỗi bản thăm dò để biểu hiện sự đáp ứng việc phản ảnh tính đa dạng của tổng thể số người đã được thăm dò.</li><li>Không có thông tin cá nhân nào (như tên, emails, số điện thoại, hoặc địa chỉ) gắn liền với các câu trả lời trong bản thăm dò hoặc được chia sẻ.</li><li>Chúng tôi làm việc với DHM Research, một tổ chức nghiên cứu dư luận phi đảng phái ở Portland, để tiến hành các tư vấn và phân tích của chúng tôi.</li></ul>');
	
	$('.page-user-register.i18n-vi form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">Lời chào mừng sẽ được gửi tới địa chỉ email của bạn, kèm theo đó là đường dẫn để cài đặt mật khẩu.</p>');
	
	$('.page-user-register.i18n-so section.demographic').prepend('<ul id="explanatory-text"><li>Waanu uruurinaynaa maxsuulka sahankan innagii oo adeegsan doona macluumaadkaa la bixiyey islamarkaana warcelinta qof walba eegayna sida ay ugu warcelinayso kala duwanaanshaha bulshadaa la sahmiyey.</li><li>Ma jiro doonaan macluumaad shakhsiyadeed (sida magac, email-ka, nambarada telephone-ka, ama cinwaanada) lagu lifaaqi doono warcelinada sahanka ama cid kale la tusi doono.</li><li>Waxa aannu la shaqaynaa DHM Research, koox cilmi-baarayaal reer Portland ah oo aan cidna ka tirsanayn oo naga caawin doona xaga la talinta iyo falan qaynta.</li></ul>');
	
	$('.page-user-register.i18n-so form section.wrapper .form-item-mail').prepend('<p id="explanatory-text-password">Waxaa Emailkaaga laguu soo diri doonaa fariin ay ku lifaaqantahy passwordkaaga.</p>');
	
	// translate menu item	
	$('.i18n-zh-hans #menu-home').text('调查');
	$('.i18n-ru #menu-home').text('Опросник для');
	$('.i18n-es #menu-home').text('Encuestas');
	$('.i18n-vi #menu-home').text('Khảo Sát Ý Kiến');
	$('.i18n-so #menu-home').text('Sahanka');


	
	// language overrides for register page
	
	// Russian
	$('.page-user-register.i18n-ru label[for="edit-field-gender-en-male"]').text('Мужчина');
	$('.page-user-register.i18n-ru label[for="edit-field-gender-en-female"]').text('Женщина');
	$('.page-user-register.i18n-ru label[for="edit-field-gender-en-other"]').text('Другое');
	$('.page-user-register.i18n-ru label[for="edit-field-gender-en-none"]').text('Мой выбор – не отвечать');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-no-high-school"]').text('Незаконченное среднее образование');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-high-school"]').text('Законченное среднее образование');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-some-college"]').text('Незаконченое высшее или профессионельно-техническое образование');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-college"]').text('Высшее образование');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-post-college"]').text('Аспирантура, учёная степень');
	$('.page-user-register.i18n-ru label[for="edit-field-education-level-en-other"]').text('Мой выбор – не отвечать');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-black label').text('Афро-американец/Африканец');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-asian label').text('Азиат/Уроженец Тихоокеанских островов');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-latino label').text('Испанец /Выходец из Латинской Америки');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-native label').text('Индеец /Американский индеец');
	// $('.page-user-register.i18n-ru .form-item-field-race-en-select-pacificislander label').text('Мой выбор – не отвечать');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-white label').text('Белый /Европеец');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-none label').text('Мой выбор – не отвечать');
	$('.page-user-register.i18n-ru .form-item-field-race-en-select-select-or-other label').text('Другое');
	$('.page-user-register.i18n-ru .form-item-field-race-en-other label').text('(объяснить)');
	$('.page-user-register.i18n-ru label[for="edit-field-party-en-select-republican"]').text('Республиканец');
	$('.page-user-register.i18n-ru label[for="edit-field-party-en-select-democrat"]').text('Демократ');
	$('.page-user-register.i18n-ru label[for="edit-field-party-en-select-non-affiliated"]').text('Не принадлежу ни к какой партии');
	$('.page-user-register.i18n-ru label[for="edit-field-party-en-select-none"]').text('Мой выбор – не отвечать');
	$('.page-user-register.i18n-ru label[for="edit-field-party-en-select-select-or-other"]').text('Другое');
	$('.page-user-register.i18n-ru .form-item-field-party-en-other label').text('(объяснить)');

	// Spanish
	$('.page-user-register.i18n-es label[for="edit-field-gender-en-male"]').text('Hombre');
	$('.page-user-register.i18n-es label[for="edit-field-gender-en-female"]').text('Mujer');
	$('.page-user-register.i18n-es label[for="edit-field-gender-en-other"]').text('Otro');
	$('.page-user-register.i18n-es label[for="edit-field-gender-en-none"]').text('Escojo no responder');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-no-high-school"]').text('Menos de una escuela preparatoria');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-high-school"]').text('Egresado de una escuela preparatoria');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-some-college"]').text('Algún título de Universidad de dos años o Tecnológico');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-college"]').text('Egresado/Graduado Universitario');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-post-college"]').text('Post Grado Graduado Universitario');
	$('.page-user-register.i18n-es label[for="edit-field-education-level-en-other"]').text('Escojo no responder');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-black label').text('AfroAmericano / Negro');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-asian label').text('Asiático');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-latino label').text('Hispano / Latino');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-native label').text('Nativo Americano / Indio Americano');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-pacificislander label').text('Isleño del Pacífico');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-white label').text('Blanco / Caucásico');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-none label').text('Escojo no responder');
	$('.page-user-register.i18n-es .form-item-field-race-en-select-select-or-other label').text('Otro');
	$('.page-user-register.i18n-es .form-item-field-race-en-other label').text('(explique)');
	$('.page-user-register.i18n-es label[for="edit-field-party-en-select-republican"]').text('Republicano');
	$('.page-user-register.i18n-es label[for="edit-field-party-en-select-democrat"]').text('Demócrata');
	$('.page-user-register.i18n-es label[for="edit-field-party-en-select-non-affiliated"]').text('No-afiliado');
	$('.page-user-register.i18n-es label[for="edit-field-party-en-select-none"]').text('Escojo no responder');
	$('.page-user-register.i18n-es label[for="edit-field-party-en-select-select-or-other"]').text('Otro');
	$('.page-user-register.i18n-es .form-item-field-party-en-other label').text('(explique)');

	// Chinese
	$('.page-user-register.i18n-zh-hans label[for="edit-field-gender-en-male"]').text('男性');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-gender-en-female"]').text('女性');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-gender-en-other"]').text('其他');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-gender-en-none"]').text('選擇不回答');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-no-high-school"]').text('低於高中');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-high-school"]').text('高中畢業');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-some-college"]').text('一些大學程度或技術');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-college"]').text('大學畢業');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-post-college"]').text('大學研究生學位');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-education-level-en-other"]').text('選擇不回答');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-black label').text('非洲裔美國人和黑人');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-asian label').text('亞洲 / 太平洋島民');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-latino label').text('西班牙裔美國人 / 拉丁裔美國人');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-native label').text('美國人/美國印地安人');
	// $('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-pacificislander label').text('Isleño del Pacífico');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-white label').text('白人/(Caucasian)高加索人');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-none label').text('選擇不回答');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-select-select-or-other label').text('其他');
	$('.page-user-register.i18n-zh-hans .form-item-field-race-en-other label').text('(解釋)');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-party-en-select-republican"]').text('共和黨');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-party-en-select-democrat"]').text('民主黨');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-party-en-select-non-affiliated"]').text('非附屬黨');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-party-en-select-none"]').text('選擇不回答');
	$('.page-user-register.i18n-zh-hans label[for="edit-field-party-en-select-select-or-other"]').text('其他');
	$('.page-user-register.i18n-zh-hans .form-item-field-party-en-other label').text('(請注明)');

	// Vietnamese
	$('.page-user-register.i18n-vi label[for="edit-field-gender-en-male"]').text('Nam');
	$('.page-user-register.i18n-vi label[for="edit-field-gender-en-female"]').text('Nữ');
	$('.page-user-register.i18n-vi label[for="edit-field-gender-en-other"]').text('Khác');
	$('.page-user-register.i18n-vi label[for="edit-field-gender-en-none"]').text('Không muốn trả lời');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-no-high-school"]').text('Dưới trung học');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-high-school"]').text('Tốt nghiệp trung học');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-some-college"]').text('Đại học hoặc trường kỹ thuật');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-college"]').text('Tốt nghiệp đại học');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-post-college"]').text('Sau khi tốt nghiệp đại học');
	$('.page-user-register.i18n-vi label[for="edit-field-education-level-en-other"]').text('Không muốn trả lời');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-black label').text('Người Mỹ Gốc Phi Châu / Da Đen');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-asian label').text('Người Mỹ Gốc Á Châu');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-latino label').text('Người Mỹ Gốc Tây Ban Nha');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-native label').text('Người Mỹ Gốc Da Đỏ');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-pacificislander label').text('Người Mỹ Gốc Đảo Thái Bình Dương');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-white label').text('Người Mỹ Da Trắng');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-none label').text('Không muốn trả lời');
	$('.page-user-register.i18n-vi .form-item-field-race-en-select-select-or-other label').text('Sắc tộc khác');
	$('.page-user-register.i18n-vi .form-item-field-race-en-other label').text('(giải thích)');
	$('.page-user-register.i18n-vi label[for="edit-field-party-en-select-republican"]').text('Cộng Hòa');
	$('.page-user-register.i18n-vi label[for="edit-field-party-en-select-democrat"]').text('Dân Chủ');
	$('.page-user-register.i18n-vi label[for="edit-field-party-en-select-non-affiliated"]').text('Không thuộc đảng nào');
	$('.page-user-register.i18n-vi label[for="edit-field-party-en-select-none"]').text('Không muốn trả lời');
	$('.page-user-register.i18n-vi label[for="edit-field-party-en-select-select-or-other"]').text('Đảng khác');
	$('.page-user-register.i18n-vi .form-item-field-party-en-other label').text('(xin ghi rõ)');

	// Somali
	$('.page-user-register.i18n-so label[for="edit-field-gender-en-male"]').text('Lab');
	$('.page-user-register.i18n-so label[for="edit-field-gender-en-female"]').text('Dhedig');
	$('.page-user-register.i18n-so label[for="edit-field-gender-en-other"]').text('Kuwa kale');
	$('.page-user-register.i18n-so label[for="edit-field-gender-en-none"]').text('Dooro in aadan ka jawaabin');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-no-high-school"]').text('Ka hooseya dugsi sare');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-high-school"]').text('Ka baxay dugsiga sare ');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-some-college"]').text('Kuliyadaha,farsamada labada sanadood');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-college"]').text('Ka baxay kuliyada');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-post-college"]').text('Ka sareeya kuliyadaha');
	$('.page-user-register.i18n-so label[for="edit-field-education-level-en-other"]').text('Dooro in aadan ka jawaabin');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-black label').text('');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-asian label').text('');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-latino label').text('');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-native label').text('');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-pacificislander label').text('');
	// $('.page-user-register.i18n-so .form-item-field-race-en-select-white label').text('');
	$('.page-user-register.i18n-so .form-item-field-race-en-select-none label').text('Dooro in aadan ka jawaabin');
	$('.page-user-register.i18n-so .form-item-field-race-en-select-select-or-other label').text('Kuwa kale');
	$('.page-user-register.i18n-so .form-item-field-race-en-other label').text('(Sharax)');
	// $('.page-user-register.i18n-so label[for="edit-field-party-en-select-republican"]').text('');
	// $('.page-user-register.i18n-so label[for="edit-field-party-en-select-democrat"]').text('');
	$('.page-user-register.i18n-so label[for="edit-field-party-en-select-non-affiliated"]').text('Cidna');
	$('.page-user-register.i18n-so label[for="edit-field-party-en-select-none"]').text('Dooro in aadan ka jawaabin');
	$('.page-user-register.i18n-so label[for="edit-field-party-en-select-select-or-other"]').text('Kuwa kale');
	$('.page-user-register.i18n-so .form-item-field-party-en-other label').text('(fadlan sharax)');
	
});










jQuery(document).ready(function($) {
	
	// replace controls on webform pages
	
	// Spanish
	$('.pps-survey.i18n-es .webform-progressbar span').replaceText("Start", "comienzo");
	$('.pps-survey.i18n-es .webform-progressbar span').replaceText("Page", "página");
	$('.pps-survey.i18n-es .webform-progressbar span').replaceText("Complete", "terminado");
	$('.pps-survey.i18n-es .webform-progressbar-number').replaceText("Page", "página");
	// appears to break pagination $('.pps-survey.i18n-es form .form-actions input.webform-next').val('página siguiente >');
	// $('.pps-survey.i18n-es form .form-actions input.webform-previous').val('< página anterior');
	$('.pps-survey.i18n-es .form-item-submitted-communication-select-select-or-other label').text('Otro');
	$('.pps-survey.i18n-es .form-item-submitted-focus-option-programs-select-select-or-other label').text('Otro');
	$('.pps-survey.i18n-es #edit-submitted-school-name-select option[value="select_or_other"]').text('Otro');
	
	// Russian
	$('.pps-survey.i18n-ru .webform-progressbar span').replaceText("Start", "начало");
	$('.pps-survey.i18n-ru .webform-progressbar span').replaceText("Page", "страница");
	$('.pps-survey.i18n-ru .webform-progressbar span').replaceText("Complete", "законченный");
	$('.pps-survey.i18n-ru .webform-progressbar-number').replaceText("Page", "страница");
	// appears to break pagination $('.pps-survey.i18n-ru form .form-actions input.webform-next').val('следующая страница >');
	// $('.pps-survey.i18n-ru form .form-actions input.webform-previous').val('< предыдущая страница');
	$('.pps-survey.i18n-ru .form-item-submitted-communication-select-select-or-other label').text('Другое');
	$('.pps-survey.i18n-ru .form-item-submitted-focus-option-programs-select-select-or-other label').text('Другое');
	
	// Chinese
	$('.pps-survey.i18n-zh-hans .webform-progressbar span').replaceText("Start", "开端");
	$('.pps-survey.i18n-zh-hans .webform-progressbar span').replaceText("Page", "页");
	$('.pps-survey.i18n-zh-hans .webform-progressbar span').replaceText("Complete", "毕");
	$('.pps-survey.i18n-zh-hans .webform-progressbar-number').replaceText("Page", "页");
	// appears to break pagination $('.pps-survey.i18n-zh-hans form .form-actions input.webform-next').val('前 页 >');
	// $('.pps-survey.i18n-zh-hans form .form-actions input.webform-previous').val('< 前 页');
	$('.pps-survey.i18n-zh-hans .form-item-submitted-communication-select-select-or-other label').text('其他');
	$('.pps-survey.i18n-zh-hans .form-item-submitted-focus-option-programs-select-select-or-other label').text('其他');

	// Vietnamese
	$('.pps-survey.i18n-vi .webform-progressbar span').replaceText("Start", "lúc đầu");
	$('.pps-survey.i18n-vi .webform-progressbar span').replaceText("Page", "trang");
	$('.pps-survey.i18n-vi .webform-progressbar span').replaceText("Complete", "làm xong");
	$('.pps-survey.i18n-vi .webform-progressbar-number').replaceText("Page", "trang");
	// appears to break pagination $('.pps-survey.i18n-vi form .form-actions input.webform-next').val('trang tiếp theo >');
	// $('.pps-survey.i18n-vi form .form-actions input.webform-previous').val('< trang trước');
	$('.pps-survey.i18n-vi .form-item-submitted-communication-select-select-or-other label').text('Khác');
	$('.pps-survey.i18n-vi .form-item-submitted-focus-option-programs-select-select-or-other label').text('Khác');
	
	// Somali
	$('.pps-survey.i18n-so .webform-progressbar span').replaceText("Start", "bilowga");
	$('.pps-survey.i18n-so .webform-progressbar span').replaceText("Page", "bogga");
	$('.pps-survey.i18n-so .webform-progressbar span').replaceText("Complete", "dhan");
	$('.pps-survey.i18n-so .webform-progressbar-number').replaceText("Page", "bogga");
	// appears to break pagination $('.pps-survey.i18n-so form .form-actions input.webform-next').val('bogga ku xiga >');
	// $('.pps-survey.i18n-so form .form-actions input.webform-previous').val('< bogga hore');
	$('.pps-survey.i18n-so .form-item-submitted-communication-select-select-or-other label').text('Kuwa kale');
	$('.pps-survey.i18n-so .form-item-submitted-focus-option-programs-select-select-or-other label').text('Kuwa kale');
	

});