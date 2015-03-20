var myPostRender = function(args) {
	(function ($) {

		// put Email Address before Postal Code
		$('.node-type-action .article .ngp-form .form-item-EmailAddress').insertBefore('.node-type-action .article .ngp-form .form-item-PostalCode');
		
	}(jQuery));
	// 
	return args;
};
var nvtag_callbacks = nvtag_callbacks || {};
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(myPostRender);


jQuery(document).ready(function($) {

	// Add disclaimer text to register page
	$('.page-user-register #edit-actions').before('<p id="terms-and-conditions">By creating an account on this website, you are explicity confirming your acceptance of and agreement to abide by NAVSO\'s <a href="/terms" title="Terms of Use">Terms of Use</a>.</p>');
	
	// remind them to use their work email
	// $('.page-user-register #edit-account .form-item-mail div.description').append('<p id="work-email">Please use your work email for this account.</p>');
	$('body.page-user-register #edit-account .form-item-mail').prepend('<p>Thank you for your interest in NAVSO! Please complete the information below to start your 90-day free trial.</p>');
	$('body.page-user-register #edit-account .form-item-mail label').html('E-mail address (please use your work email address for this account) <span title="This field is required." class="form-required">*</span>');
	$('body.page-user-edit #edit-account .form-item-mail label').html('E-mail address (please use your work email address for this account) <span title="This field is required." class="form-required">*</span>');
	$('#forum .forum-node-create-links .forum-add-node a span').text('Post New Topic');
	
	// clarify that the Category has multiple options
	$('.page-contact #contact-site-form .form-item-cid label').html('Category (Choose one) <span title="This field is required." class="form-required">*</span>')
		
});