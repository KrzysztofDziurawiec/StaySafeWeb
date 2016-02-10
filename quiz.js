var score = 0;
var total = 10;

function init()
{
	sessionStorage.setItem('a1', 'c');
	sessionStorage.setItem('a2', 'd');
	sessionStorage.setItem('a3', 'd');
	sessionStorage.setItem('a4', 'c');
	sessionStorage.setItem('a5', 'b');
	sessionStorage.setItem('a6', 'c');
	sessionStorage.setItem('a7', 'b');
	sessionStorage.setItem('a8', 'c');
	sessionStorage.setItem('a9', 'c');
	sessionStorage.setItem('a10', 'd');
}

$(document).ready(function() 
{
	$('.questionForm').hide();

	$('#q1').show();

	$('.questionForm #submit').click(function()
	{
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;

		$('.questionForm').hide();
		$('#q'+next+'').show();
		process(''+current+'');
		return false;
	});
});

function process(n) 
{
	var submitted = $('input[name=q'+n+']:checked').val();
	if (submitted == sessionStorage.getItem('a'+n+''))
		{
			score++;
		}

	if (n == total)
	{
		$('#results').html('<p>Your final score is: ' + score/2 + ' out of 10</p>');
	}
	return false;
}

window.addEventListener('load', init, false);
