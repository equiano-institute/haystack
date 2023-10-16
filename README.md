<div align="center">
    <h1 align="center">Red Teaming LLMs</h1>
 
</div>


This project aims to develop Haystack, an open-source platform for red teaming and human feedback on LLMs with crowd-sourcing and automated methods


## Goals
* build a frontend for [Pythia model evaluation](https://github.com/EleutherAI/pythia)
* develop a model evaluation interfaces for [red teaming from scratch](https://arxiv.org/abs/2306.09442)
* develop a [representational view of interpretability](https://arxiv.org/abs/2310.01405)
* organise open source human feedback data for sharing between models.

## Challenges & Efforts 

Despite there being many efforts to red team language models, there aren't any available open source frameworks for client-level user model evaluation and red teaming testing.
* [White House](https://www.whitehouse.gov/ostp/news-updates/2023/08/29/red-teaming-large-language-models-to-identify-novel-ai-risks)
* [UK (Royal Society)](https://royalsociety.org/science-events-and-lectures/2023/10/ai-safety-science-redteam)
* The Trojan Detection [MIT Challenge 2023](https://trojandetection.ai)
* DEF [CON](https://aivillage.org/defcon31) 



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