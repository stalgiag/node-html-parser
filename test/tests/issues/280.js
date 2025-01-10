const { parse } = require('@test/test-target');
const { parse: parse6113 } = require('@test/test-6113');
const { parse: parse531 } = require('@test/test-531');
const fs = require('fs');

describe('issue 280 Regression: Versions >= v5.3.2 are unable to parse specific link', function () {
	const logParseAttempt = (version, source) => {
		console.log(`Attempting to parse ${source} with ${version}...`);
	};

	it('dev with modified HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/HTML Standard.html', 'utf-8');
		logParseAttempt('dev', 'modified HTML Spec');
		console.time('parse-dev');
		const parsedHTML = parse(html);
		console.timeEnd('parse-dev');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v5.3.1 with modified HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/HTML Standard.html', 'utf-8');
		logParseAttempt('v5.3.1', 'modified HTML Spec');
		console.time('parse-v5.3.1');
		const parsedHTML = parse531(html);
		console.timeEnd('parse-v5.3.1');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v6.1.13 with modified HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/HTML Standard.html', 'utf-8');
		logParseAttempt('v6.1.13', 'modified HTML Spec');
		console.time('parse-v6.1.13');
		const parsedHTML = parse6113(html);
		console.timeEnd('parse-v6.1.13');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v5.3.1 with HTML fetched from http://html.spec.whatwg.org/', async function () {
		const html = await fetch('http://html.spec.whatwg.org/').then((response) => response.text());
		logParseAttempt('v5.3.1', 'live HTML spec');
		console.time('parse-v5.3.1');
		const parsedHTML = parse531(html);
		console.timeEnd('parse-v5.3.1');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('dev with HTML fetched from http://html.spec.whatwg.org/', async function () {
		const html = await fetch('http://html.spec.whatwg.org/').then((response) => response.text());
		logParseAttempt('dev', 'live HTML spec');
		console.time('parse-dev');
		const parsedHTML = parse(html);
		console.timeEnd('parse-dev');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v6.1.13 with HTML fetched from http://html.spec.whatwg.org/', async function () {
		const html = await fetch('http://html.spec.whatwg.org/').then((response) => response.text());
		logParseAttempt('v6.1.13', 'live HTML spec');
		console.time('parse-v6.1.13');
		const parsedHTML = parse6113(html);
		console.timeEnd('parse-v6.1.13');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('dev with original HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/html.spec.whatwg.org.html', 'utf-8');
		logParseAttempt('dev', 'original HTML Spec');
		console.time('parse-dev');
		const parsedHTML = parse(html);
		console.timeEnd('parse-dev');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v5.3.1 with original HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/html.spec.whatwg.org.html', 'utf-8');
		logParseAttempt('v5.3.1', 'original HTML Spec');
		console.time('parse-v5.3.1');
		const parsedHTML = parse531(html);
		console.timeEnd('parse-v5.3.1');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});

	it('v6.1.13 with original HTML Spec', function () {
		const html = fs.readFileSync(__dirname + '/../../assets/html/html.spec.whatwg.org.html', 'utf-8');
		logParseAttempt('v6.1.13', 'original HTML Spec');
		console.time('parse-v6.1.13');
		const parsedHTML = parse6113(html);
		console.timeEnd('parse-v6.1.13');
		const title = parsedHTML.querySelector('title');
		console.log('Title:', title.text);
		title.text.should.equal('HTML Standard');
	});
});
