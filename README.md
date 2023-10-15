<div align="center">
    <h1 align="center">Red Teaming LLMs Guide</h1>
 
</div>

<div align="center">
  <a href="https://equiano.institute">equiano.institute</a>
</div>
<br/>

The Red Teaming LLMs Guide is a comprehensive resource for red teaming language models. It provides valuable insights and techniques for evaluating, testing, and assessing the security and robustness of language models. The guide is hosted at the Equiano Institute and can be found on GitHub at [github.com/equiano-institute/haystack](https://github.com/equiano-institute/haystack).

## Features

- **In-depth Analysis:** Explore detailed analysis and methodologies for red teaming language models
- **Practical Techniques:** Learn practical techniques for evaluating the security and robustness of language models
- **Comprehensive Guide:** Access a comprehensive guide that covers various aspects of red teaming LLMs

<br/>

![](public/envshare.jpg)

## Built with

- [Next.js](https://nextjs.org)
- [tailwindcss](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com) 



 # Red Teaming 
 
<table>
  <tr>
    <th>Assessment Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Capabilities Assessment</td>
    <td>Benchmark performance on representative tasks and datasets. Measure capabilities like accuracy, robustness, efficiency. Identify strengths, limitations, and gaps.</td>
  </tr>
  <tr>
    <td>Adversarial Testing</td>
    <td>Probe with malformed, adversarial inputs. Check for crashes, unintended behavior, security risks. Informed by threat models, risk analysis.</td>
  </tr>
  <tr>
    <td>Red Teaming</td>
    <td>Model potential real-world risks and failures. Role play adversary perspectives. Surface risks unique to AI.</td>
  </tr>
  <tr>
    <td>Human Oversight</td>
    <td>Manual test cases based on human judgment.</td>
  </tr>
</table>
 

## Attack Examples 


<a href="https://arxiv.org/abs/2307.10719">Mosaic Prompt : breakdown a prompt into permissible components</a>



* Users break down impermissible content into small permissible components.
* Each component is queried independently and appears harmless.
* User recombines components to reconstruct impermissible content.
* Exploits compositionality of language.

<img src="public/red.jpg" alt="Red Image" width="400" >

<a href="https://arxiv.org/abs/2310.02446">Cross-Lingual Attacks : translating between high and low-resource languages for attacking multi-lingual capability</a>

* The attack involves translating unsafe English input prompts into low-resource natural languages using Google Translate.
* Low-resource languages are those with limited training data, like Zulu.
* The translated prompts are sent to GPT-4, which then responds unsafely instead of refusing.
* The attack exploits uneven multilingual training of GPT-4's safety measures.


<img src="public/low.jpg" alt="Low Resource" width="400" >