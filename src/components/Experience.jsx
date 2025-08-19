import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20  p-14 md:p-20 lg:p-36'>
            <h1 className='text-center text-5xl font-light'>Experience</h1>

            <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">

                <div className="flex1">

                    <div className="relative space-y-1 border-l-2 p-8 text-left">
                        <h3 className='text-xl font-semibold md:text-2xl'>Primas Asset Management</h3>
                        <p className='font-light text-lg text-gray-600'>Fixed Income Intern</p>
                        <ul className='text-sm text-gray-600 list-disc pl-5'>
                          <li>Developed interface for bond universe filtration through Bloomberg BQuant IDE (Jupyter Notebook)</li>
                          <li>Improved efficiency for capturing price movement, filtering & sorting from Bloomberg & Python instead of VBA</li>
                          <li>Reduced time needed to generate report from hours to seconds, now allowing daily monitoring (previously weekly)</li>
                          <li>Developed intuitive front-end page (ipydatagrid & ipywidgets), using back-end pandas dataframes & manipulation</li>
                          <li>Designed 10Y Yield Prediction model, building upon Bloomberg's BECO model equation for improved accuracy</li>
                          <li>Proposed training RLHF model with geopolitical & Fed-speak data for sentiment score (10Y Yield predictive factor)</li>
                        </ul>
                        <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#91be9f]'></span>
                    </div>

                    <div className="relative space-y-1 border-l-2 p-8 text-left">
                        <h3 className='text-xl font-semibold md:text-2xl'>UBS LPoA Portfolio Manager</h3>
                        <p className='font-light text-lg text-gray-600'>Quantitative Developer</p>
                        <ul className='text-sm text-gray-600 list-disc pl-5'>
                          <li>Created a quantitative model used for systematic trading of 40% equity allocation of US$117 million portfolio</li>
                          <li>Generated automated predictive signals to enable intraday algorithmic trading of equity index ETF</li>
                          <li>Statistical analysis of momentum indicators to find parameters with highest correlation to price movement</li>
                          <li>Model capable of capturing investor sentiments, timing breakout inflexion points at the start of trendline</li>
                          <li>Programmed strategy into TradingView using PineScript language to generate real-time weighted buy/sell signals</li>
                          <li>12-month record of +35% profit -2% drawdown for QQQ, +18% profit -3% drawdown for SPY, beating benchmarks</li>
                        </ul>
                        <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#91be9f]'></span>
                    </div>

                    <div className="relative space-y-1 border-l-2 p-8 text-left">
                        <h3 className='text-xl font-semibold md:text-2xl'>University of Michigan, SLED Lab</h3>
                        <p className='font-light text-lg text-gray-600'>Undergraduate Researcher</p>
                        <ul className='text-sm text-gray-600 list-disc pl-5'>
                          <li>Researched reinforcement learning of bots with a goal of multi-robot coordination</li>
                          <li>Simulated interaction between two AI agents with a single goal-oriented task in 2D grid, through CommonGrid library</li>
                          <li>Testing and debugging machine learning algorithms (Python), to improve communication between agents</li>
                          <li>Behavioural psychology theories and research applied to design experiments and effective reward algorithms</li>
                          <li>Project proposals to further research multimodal large language models, inspired by psychology research</li>
                        </ul>
                        <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#91be9f]'></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience 