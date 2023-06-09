// Load the Google Translate API
google.load('language', '1', {
	'callback': function() {
		translateButton('translate-hindi', 'hi', 'en');
		translateButton('translate-english', 'en', 'hi');
	}
});

// Function to handle translation
function translateButton(buttonId, sourceLang, targetLang) {
	$('#' + buttonId).click(function() {
		var inputText = $('#input').val();

		// Translate the input text
		google.language.translate(inputText, sourceLang, targetLang, function(result) {
			var outputText = result.translation;

			// Update the output text area
			$('#output').val(outputText);
		});
	});
}
