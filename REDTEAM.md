# Red Teaming 

## Capabilities Assessment

* Benchmark performance on representative tasks and datasets.
* Measure capabilities like accuracy, robustness, efficiency.
* Identify strengths, limitations, and gaps.

## Adversarial Testing

* Probe with malformed, adversarial inputs.
* Check for crashes, unintended behavior, security risks.
* Informed by threat models, risk analysis.

## Red Teaming

* Model potential real-world risks and failures.
* Role play adversary perspectives.
* Surface risks unique to AI.

## Human Oversight

* Manual test cases based on human judgment.
* Qualitative feedback on subtle flaws.
* Values alignment evaluation.

 

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