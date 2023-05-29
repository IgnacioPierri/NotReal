// Array de palabras sospechosas
const palabrasSospechosas = [
	"estafa",
  	"phishing",
  	"fraude",
  	"urgente",
  	"your new request",
  	"don't miss out on +2,975 eth",
  	"check your balance now",
  	"confirm receipt in 30 days",
  	"eth claim",
  	"binance airdrop",
  	"free airdrop claim",
  	"connecting your wallet",
  	"claim your unclaimed",
  	"cuenta suspendida",
  	"verificación de cuenta",
  	"contraseña comprometida",
  	"ganador de premio",
  	"herencia no reclamada",
  	"oportunidad de inversión",
  	"préstamo instantáneo",
  	"oferta irresistible",
  	"actualizar información de la cuenta",
  	"actividad sospechosa",
  	"envío de dinero",
  	"solicitud de información personal",
  	"actualización de seguridad",
  	"premio en efectivo",
  	"lotería internacional",
  	"ganancias garantizadas",
  	"we're sorry to let you know that your package which arrived on 48h will be sent back.",
  	"this may happen when the receiver's address is incorrect.",
 	"to submit a redelivery request for this package please fill out the form on our website.",
  	"the health medical today-marketpackage health medical today-marketsent health medical today-marketto health medical today-marketyou health medical today-markethas health medical today-marketbeen health medical today-marketdelivered health medical today-marketto fedex health medical today-marketoffice",
  	"please health medical today-marketconfirm health medical today-marketthe health medical today-marketpayment (2.99$) on health medical today-marketthe health medical today-marketlink health medical today-marketbelow health medical today-marketwithin health medical today-marketa health medical today-marketmaximum health medical today-marketof health medical today-market14 health medical today-marketdays health medical today-marketbefore health medical today-marketit health medical today-marketexpires",
  	"follow health medical today-marketmy health medical today-marketpackage",
  	"this health medical today-marketemail health medical today-marketis health medical today-marketprovided health medical today-marketfor health medical today-marketinformational health medical today-marketpurposes health medical today-marketonly health medical today-marketand health medical today-marketdoes health medical today-marketnot health medical today-marketguarantee health medical today-marketdelivery health medical today-marketof health medical today-marketthe health medical today-marketshipment",
  	"unable health medical today-marketto health medical today-marketreply health medical today-marketto health medical today-marketthis health medical today-marketemail",
  	"your health medical today-markete-mail health medical today-marketaddress health medical today-marketwill health medical today-marketonly health medical today-marketbe health medical today-marketused health medical today-marketfor health medical today-marketthe health medical today-marketannouncement health medical today-marketof health medical today-marketthe health medical today-marketparcel health medical today-marketof health medical today-marketthe health medical today-marketabove health medical today-marketshipment health medical today-marketand health medical today-marketwill health medical today-marketnot health medical today-marketbe health medical today-marketsaved health medical today-marketfor health medical today-marketadvertising health medical today-marketpurposes",
  	"if health medical today-marketyou health medical today-marketno health medical today-marketlonger health medical today-marketwish health medical today-marketto health medical today-marketreceive health medical today-marketthe health medical today-marketpackage health medical today-marketannouncement health medical today-marketplease health medical today-marketclick health medical today-markethere: fedex health medical today-marketnotification health medical today-marketservice",
  	"we need your attention",
  	"there appears to be some missing or erroneous information on account",
  	"please update your information as soon as possible",
  	"how can i update my account",
  	"simply click on the button below and follow the steps to update your data",
  	"verify your information",
  	"once you've completed",
  	"we,all review and get back to you",
  	"regarding the status of your account within 7 business days",
  	"we appreciate your attention to this matter",
  	"we hope you're doing well and enjoying our service",
  	"recently, our analytics system detected a large number of inactive accounts",
  	"unfortunately, you were one of them",
  	"in order to continue using our service",
  	"we kindly ask that you take a moment to verify your wallet",
  	"doing so will allow us to ensure that your account is secure and up-to-date with the latest features",
  	"bnb airdrop is now live",
  	"to celebrate having almost 120 million users on our platform",
  	"we want to give you the biggest airdrop in the history of the crypto community",
  	"we are starting bnb airdrop on our platform",
  	"you may receive up to 500 bnb completely free",
  	"the airdrop will end on may 24, 2023, 18:00 utc",
  	"with a limited supply of 400,000 bnb tokens to be distributed by smart contract on a first-come, first-served basis",
  	"please scan the qr code below using your camera phone to claim your bnb tokens before they sell out",
  	"thank you for using binance",
  	"our system has shown that your account is outdated",
  	"update your ledger live account with the button below",
  	"outdated ledger live accounts will be suspended on",
  	"please make sure to update as soon as possible",
  	"we are sorry for any inconvenience we cause doing this",
  	"but please keep in mind that our intention is to keep our customers safe and satisfied",
  	"we are writing to let you know that coinbase is carrying out an operation to delete inactive and fake wallets",
  	"we have detected that your wallet is one of those wallets",
  	"to prevent your wallet from being deleted as part of this scheduled operation, please take a moment to confirm your wallet by clicking on the link below",
  	"joey ryan has shared a file with you",
  	"are you interested in participating in the development of acrypto startup",
  	"do you have free time currently",
  	"i am attaching txt with the budget and details",
  	"i hope you will be interested",
  	"awaiting your reply",
  	"best regards, joey ryan cfo trustswap",
	"the package sent to you has been delivered to usps",
	"should be delivered withing 48h",
	"confirm the payment (1.99 $) on the link below within a maximum of 14 days before it expires",
	"this service email was sent based on your alert settings",
  	"to protect your personal information, please don't reply to this email",
  	"if you have concerns about the authenticity of this message",
  	"your privacy is important to us",
  	"thank you for contacting forcast",
  	"this email has been sent automatically to confirm that your request has been received and a ticket has been created",
  	"our customer service representative will review your request when available, and will send you a personal response within 1 business day",
  	"you can follow up the ticket via the following url",
  	"to add additional comments, reply to this email",
  	"thank you for your patience",
  	"forcast.com.au support team",
  	"why is your account limited?",
  	"we recently received a report of unauthorized activity on a card linked to your paypal account",
 	"to help keep your account secure, please take action on your account",
 	"we've also temporarily limited certain features in your paypal account",
 	"currently, you won't be able to:",
 	"send money",
 	"withdraw money",
 	"what should you do?",
 	"log in to your paypal account and perform the required tasks",
	"depositá $10000 y jugá con $20000",
	"disfrutá de tu experiencia con un bono de bienvenida",
	"duplica tu primer depósito hasta $10.000 pesos",
	"immediate verification required",
  	"your information has been expired",
	"te pediria si sos tan amable que lo pases a bandeja de entrada",
  	"your withdrawals are disabled until you update your informations",
  	"update informations",
  	"important notice:if you don't update your information within 72 hours",
  	"your account will get disabled permanently",
	"reviewed by our support staff",
	"phi beta kappa",
	"additional comments",
	"service from phi beta kappa",
	"confirm_receipt_today",
	"your_eth_coins_need_your_attention",
	"luminary faqs",
  	"support@luminarypodcasts.com",
	"https://script.google.com/macros/s/akfycbwtrmrkmb3-ttbydr4ksw4khhun0slvt4pguiizfufafxf1txnh6lonp7j9bdjs3lzua/exec",
	"luminary support",
	"HTTPS://script.google.com/macros/s/AKfycbwTRMRKMb3-TTbYPDr4KsW4khHun0sLVt4PGuIIzfUfafxF1TXnh6lOnp7j9bdJS3lzUA/exec",
	"confirm_your_ETH_coin_receipt_and_secure_your_balance:HTTPS://script.google.com/macros/s/AKfycbwTRMRKMb3-TTbYPDr4KsW4khHun0sLVt4PGuIIzfUfafxF1TXnh6lOnp7j9bdJS3lzUA/exec,",
	"confirm_your_eth_coin_receipt_and_secure_your_balance:https://script.google.com/macros/s/akfycbwtrmrkmb3-ttbypdr4ksw4khhun0slvt4pguiizfufaxf1txnh6lonp7j9bdjs3lzua/exec",
	"oficial_binance_chat",
	"confirm_your_ETH_coin_receipt_and_secure_your_balance",
	"https://script.google.com/macros/s/akfycbwtrmrkmb3-ttbypdr4ksw4khhun0slvt4pguiizfufaxf1txnh6lonp7j9bdjs3lzua/exec",
	"Thanks for reaching out to Luminary Support! Your request is important to us and we will reply as soon as we can when agents are back online during our typical business hours.",
	"your request will be processed in the order it was received",
  	"when agents are back online",
  	"service from luminary",
  	"delivered by zendesk",
	"the health medical today-marketpackage health medical today-marketsent health medical today-marketto health medical today-marketyou health medical today-markethas health medical today-marketbeen health medical today-marketdelivered health medical today-marketto health medical today-marketdhl health medical today-marketoffice health medical today-marketand health medical today-marketshould health medical today-marketbe health medical today-marketdelivered health medical today-marketwithing health medical today-market48h",
	"please health medical today-marketconfirm health medical today-marketthe health medical today-marketpayment (2.99$) on health medical today-marketthe health medical today-marketlink health medical today-marketbelow health medical today-marketwithin health medical today-marketa health medical today-marketmaximum health medical today-marketof health medical today-market14 health medical today-marketdays health medical today-marketbefore health medical today-marketit health medical today-marketexpires",
	"follow health medical today-marketmy health medical today-marketpackage",
	"this health medical today-marketemail health medical today-marketis health medical today-marketprovided health medical today-marketfor health medical today-marketinformational health medical today-marketpurposes health medical today-marketonly health medical today-marketand health medical today-marketdoes health medical today-marketnot health medical today-marketguarantee health medical today-marketdelivery health medical today-marketof health medical today-marketthe health medical today-marketshipment",
	"unable health medical today-marketto health medical today-marketreply health medical today-marketto health medical today-marketthis health medical today-marketemail",
	"your health medical today-markete-mail health medical today-marketaddress health medical today-marketwill health medical today-marketonly health medical today-marketbe health medical today-marketused health medical today-marketfor health medical today-marketthe health medical today-marketannouncement health medical today-marketof health medical today-marketthe health medical today-marketparcel health medical today-marketof health medical today-marketthe health medical today-marketabove health medical today-marketshipment health medical today-marketand health medical today-marketwill health medical today-marketnot health medical today-marketbe health medical today-marketsaved health medical today-marketfor health medical today-marketadvertising health medical today-marketpurposes",
	"if health medical today-marketyou health medical today-marketno health medical today-markelonger health medical today-marketwish health medical today-marketto health medical today-marketreceive health medical today-marketthe health medical today-marketpackage health medical today-marketannouncement health medical today-marketplease health medical today-marketclick health medical today-markethere dhl health medical today-marketnotification health medical today-marketservice",
	"website		contact		impressum",
	"ã‚â© 2023 dhl id00##09-{7}##",
	"why is your account limited",
	"we recently received a report of unauthorized activity on a card linked to your paypal account",
	"to help keep your account secure, please take action on your account",
	"we've also temporarily limited certain features in your paypal account",
	"currently, you won't be able to",
	"what should you do",
	"log in to your paypal account and perform the required tasks",
	"log in to paypal",
	"what happens next",
	"once you've finished, we'll review and get back to you with the status of your account within 5 business days",
	"trustwallet requires all users to verify their wallets",
	"in order to comply with kyc regulation",
	"this must be done before 01/06/2023 as a regulated financial services company",
	"we are required to verify all wallets on our platform",
	"we require all customers to verify their wallets to continue using our service",
	"what if i don't complete the wallet verification",
	"if you don't verify your wallet,your wallet will be restricted and your assets will be frozen",
	"verify your wallet",
	"package redelivery notice",
	"has been held at the local post office awaiting your redelivery authorization",
	"in only a few minutes",
	"electronically sign documents",
	"reliable, secure, and enforceable by law",
	"this email could have confidential information in it",
	"this is your responsibility, so manage it",
	"we need your attention",
	"there appears to be some missing or erroneous information on account",
	"please update your information as soon as possible",
	"so that you can continue to enjoy all of your account's perks",
	"how can i update my account",
	"simply click on the button below and follow the steps to update your data",
	"hello get_your_eth_here:https://script.google.com/macros/s/akfycbwj_23_igkfxo5kdpnfcildz72t6igrk5mezta",
	"thank you for contacting newtek customer support",
	"your request has been received and assigned ticket number 638760",
	"please use this ticket for updates and follow up",
	"this is only a confirmation that your inquiry has been received",
	"an analyst will be providing a response to your message",
	"for a faster response please reach out to your dealer for information on protek support",
	"if you are a protek member and need faster access",
	"please feel free to use newtek's online chat as indicated at http://new.tk/call",
	"ticket #20332150: [action required: confirm receipt of your unclaimed eth coins]",
	"hi [action required: confirm receipt of your unclaimed eth coins] https://f96maic.page.link/h3xd",
	"thank you for contacting us about this issue",
	"your request (#20332150) has been received",
	"and is being reviewed by our support staff",
	"our goal is to get back to you within 24 hours",
	"while we’re reviewing this issue",
	"we recommend that you check out our faq’s at http://support.tel3.com/categories/20086307-frequently-asked-questions",
	"to add additional comments",
	"reply to this email or follow the link below: http://tel3.zendesk.com/hc/requests/20332150",
	"we appreciate your patience and we look forward to assisting you",
	"sincerely, tel3 support",
	"this email is a service from tel3 support",
	"안녕하세요 important: confirm your eth coin balance to avoid forfeiture https://ar7m.page.link/bnhh 회원님",
	"요청이 접수 되었습니다",
	"감사합니다",
	"[3z9zlz-qxzgz]",
	"고객센터 1661-1046 운영시간 평일 10시 ~ 19시 13~14시 점심 (유선 및 채팅상담) , 이메일문의 support-kr@hb.co.kr",
	"hello [don't lose your eth coins - confirm receipt today] https://dl8fk.page.link/ak1i",
	"ticket [297946] was created to track this support request. it is currently being reviewed and will soon be assigned to a technician. we will keep this ticket updated as work on this request progresses.",
	"to add additional comments, please reply to this email.",
	"this email is a service from help desk. delivered by zendesk.",
	"dear act fast - confirm receipt of your eth coins in 30 days. https://docs.google.com/forms/d/1up2fg5n7edfgsfxmeu_wo3ij9ycuvt4-mgatrsui7jg/edit",
	"+2,975 eth was accumulated",
	"note: your wallet must have assets worth a minimum of but not limited to 0,2 eth. this requirement is in place in order to avoid bots, abuse and multi accounts. 👉 confirm here note fore metamask 🦊 users only: to claim your rewards - don't forget to check and enable eth_sign at settings/advanced/toggle requests.",
	"thank you for contacting minergate! this is an automatic email just to acknowledge that we have received your ticket. we will contact you shortly.",
	"your ticket number is 571711: just reply in this thread in case you need to update your request.",
	"our team works on business days only: this means it might take some time to get back to you during weekends.",
	"thank you for mining with us,",
	"minergate team",
	"best wishes from minergate support staff",
	"#airdropbinance <launcharbit@fc7j3a6.onmicrosoft.com>",
	"mlrch-b3c1b72ed",
	"αrb rewards αirdrop is now live!",
	"to celebrate having almost 120 million users on our platform, we want to give you the biggest airdrop in the history of the crypto community.",
	"we are starting a limited-time αrb airdrop on our platform ; you may receive up to 500,000 arb completely free !",
	"the airdrop will end on may 5, 2023, 18:00 utc, with a limited supply of 40,000,000 arb tokens to be distributed by smart contract on a first-come, first-served basis.",
	"follow the instructions on our website and claim your αrb tokens before they sell out!",
	"40,000,000 $arb",
	"join airdrop now",
	"ayuda@rapicredit.zendesk.com",
	"##- por favor, escriba su respuesta por encima de esta línea -##",
	"buen día don't let your eth coins go to waste - confirm receipt now https://yg2lz.page.link/rnix,",
	"hemos recibido su solicitud (2857441) y nuestros especialistas de ayuda al cliente la están revisando, te daremos contacto lo más pronto posible.",
	"si deseas agregar comentarios adicionales, responde a este correo electrónico. muchas gracias.",
	"equipo de ayuda al cliente rapicredit",
	"este correo electrónico es un servicio de rapicredit.",
	"este correo y cualquier archivo anexo pertenecen a compañía de créditos rápidos sas y son para uso exclusivo del destinatario intencional. esta comunicación puede contener información confidencial o de acceso privilegiado. si usted ha recibido este correo por error, equivocación u omisión favor notificar en forma inmediata al remitente y eliminar dicho mensaje con sus anexos. la utilización, copia, impresión, retención, divulgación, reenvío o cualquier acción tomada sobre este mensaje y sus anexos queda estrictamente prohibida y puede ser sancionada legalmente.",
	"de igual forma, los datos personales que por medio de este correo se soliciten o suministren, serán tratados de acuerdo a las finalidades del objeto social de la sociedad y con el fin de dar respuesta y brindar la información relacionada con los temas que sean de su interés y estén relacionados con la relación comercial u operacional que tiene con la sociedad. sus datos personales y de contacto podrán serán tratados conforme a lo establecido en la política de tratamiento de datos personales que puede ser consultada en nuestra página web https://www.rapicredit.com/politica-de-privacidad-tratamiento-de-datos/",
	"[rd5lvo-qqdl5]",
	"hello [system alert: confirm receipt of your eth coins before it's too late] https://tbcod.page.link/kfxd,",
	"we'd love to hear what you think about our customer service as it relates to your most recent support request ([system alert: confirm receipt of your eth coins before it's too late]) resolved by gina. please take a moment to answer one simple question by clicking either link below:",
	"here's a reminder of what your ticket was about:",
	"[system alert: confirm receipt of your eth coins before it's too late] https://tbcod.page.link/kfxd",
	"review your 2,975 eth https://tbcod.page.link/kfxd",
	"your pinger support request has been updated by gina. if you have any additional questions or still need help, respond directly back to this email. your request will be re-opened with any updated comments.",
	"you can also access and update your support request from this link. pinger.zendesk.com/hc/requests/4427002",
	"pinger made it easy for me to handle my issue.",
	"disagreesomewhat disagreeundecidedsomewhat agreeagreestrongly agree",
	"this email is a service from pinger support."




  ];


// Función para verificar el correo electrónico y cambiar los colores
function verificarCorreo() {
    const emailContent = document.getElementById("emailContent").value;
    let resultado = "";

    // Verificar si alguna palabra sospechosa está presente en el contenido del correo electrónico
    let esSospechoso = false;
    for (let palabra of palabrasSospechosas) {
        if (emailContent.toLowerCase().includes(palabra)) {
            esSospechoso = true;
            resultado = "El correo electrónico parece ser sospechoso, ten cuidado.";
            break;
        }else {
            resultado = "El correo electrónico parece ser seguro.";
        }
    }

    // Cambiar colores de fondo y texto según la condición
    if (esSospechoso) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "red";
    } else {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "green";
    }

	// Mostrar el resultado en el elemento con el id "result"
    document.getElementById("result").innerText = resultado;
}
    
// Capturar el evento de presionar una tecla en el textarea
const textarea = document.getElementById("emailContent");
textarea.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el comportamiento predeterminado de salto de línea
        verificarCorreo(); // Llamar a la función de verificación
    }
});


// Event listener para el botón de verificación
document.getElementById("checkButton").addEventListener("click", verificarCorreo);


// Función para mostrar/ocultar la información de "Cómo funciona"
function toggleHowItWorks() {
    const infoDiv = document.getElementById("howItWorksInfo");
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}


// Función para mostrar/ocultar la información de "Colaborar"
function colaborar() {
    const infoDiv = document.getElementById("colaborarInfo");
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}


// Variables y funciones para crear el efecto de partículas en el fondo
let resizeReset = function() {
	w = canvasBody.width = window.innerWidth;
	h = canvasBody.height = window.innerHeight;
}


// Opciones de configuración para las partículas
const opts = { 
	particleColor: "rgb(200,200,200)",
	lineColor: "rgb(200,200,200)",
	particleAmount: 30,
	defaultSpeed: 1,
	variantSpeed: 1,
	defaultRadius: 2,
	variantRadius: 2,
	linkRadius: 200,
};

window.addEventListener("resize", function(){
	deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2){ 
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){ 
	for (let i = 0; i < hubs.length; i++) {
		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
		let opacity = 1 - distance / opts.linkRadius;
		if (opacity > 0) { 
			drawArea.lineWidth = 0.5;
			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
			drawArea.beginPath();
			drawArea.moveTo(point1.x, point1.y);
			drawArea.lineTo(hubs[i].x, hubs[i].y);
			drawArea.closePath();
			drawArea.stroke();
		}
	}
}


// Clase para representar una partícula
Particle = function(xPos, yPos){ 
	this.x = Math.random() * w; 
	this.y = Math.random() * h;
	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
	this.directionAngle = Math.floor(Math.random() * 360); 
	this.color = opts.particleColor;
	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
	this.vector = {
		x: Math.cos(this.directionAngle) * this.speed,
		y: Math.sin(this.directionAngle) * this.speed
	};
	this.update = function(){ 
		this.border(); 
		this.x += this.vector.x; 
		this.y += this.vector.y; 
	};
	this.border = function(){ 
		if (this.x >= w || this.x <= 0) { 
			this.vector.x *= -1;
		}
		if (this.y >= h || this.y <= 0) {
			this.vector.y *= -1;
		}
		if (this.x > w) this.x = w;
		if (this.y > h) this.y = h;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;	
	};
	this.draw = function(){ 
		drawArea.beginPath();
		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		drawArea.closePath();
		drawArea.fillStyle = this.color;
		drawArea.fill();
	};
};


// Función para configurar el efecto de partículas
function setup(){ 
	particles = [];
	resizeReset();
	for (let i = 0; i < opts.particleAmount; i++){
		particles.push( new Particle() );
	}
	window.requestAnimationFrame(loop);
}


// Función que se ejecuta en bucle para actualizar y dibujar las partículas
function loop(){ 
	window.requestAnimationFrame(loop);
	drawArea.clearRect(0,0,w,h);
	for (let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].draw();
	}
	for (let i = 0; i < particles.length; i++){
		linkPoints(particles[i], particles);
	}
}

const canvasBody = document.getElementById("canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();


  
