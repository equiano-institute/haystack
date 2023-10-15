import React from "react";
import { Title } from "@components/title";

const BlogPage = () => {
  return (
    <div className="container px-8 mx-auto mt-16 lg:mt-32 ">
      <Title>Introduction to Red Teaming</Title>
      <p className="mt-4 text-sm text-center text-zinc-600">
          Red teaming: Simulates threats by humans taking an adversarial perspective 
    </p>
      <div className="grid grid-cols-2 gap-8 mt-8 text-zinc-400">
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-xl font-medium text-white">Capabilities Assessment</h2>
          <p className="mt-4 text-sm ">
           
          Benchmark performance on representative tasks and datasets. Measure capabilities<sup>¶</sup> like accuracy, robustness, efficiency. Identify strengths, limitations, and gaps.
              </p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-xl font-medium text-white">Red Teaming</h2>
          <p className="mt-4 text-sm ">
          Model potential real-world risks and failures. Role play adversary perspectives. Surface risks unique to AI. </p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-8"> 
            <h2 className="text-xl font-medium text-white">Jailbreaking</h2>
            <p className="mt-4 text-sm ">
            Inject prompts that break the model safeguards. Check for crashes, unintended behavior, security risks and trojan detection<sup>2</sup>.    </p>
          </div>
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-xl font-medium text-white">Human Oversight</h2>

        
          <p className="mt-4 text-sm ">
          Manual test cases based on human judgment<sup>1</sup>. Qualitative feedback on subtle flaws. Values alignment evaluation.
          </p>
        </div>


        {/* Insert a footnote */}
        <sub>[¶] performance is evaluated using attack success rate(ASR) and  <a href="https://github.com/EleutherAI/pythia"  className="text-red-300">benchmarks </a> </sub>

      
    
        <sub>[1] the goal is to reduce the time and effort needed for supervision, and assist 
        <a href="https://arxiv.org/abs/1606.06565" className="text-red-300"> human supervisors. </a> </sub>
        <sub>[2]  a neural trojan attack is to insert hidden behaviors into a <a href=" https://trojandetection.ai"  className="text-red-300">neural network</a></sub>
      </div>

      
    </div>
  );
};

export default BlogPage;
