import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartJS} from 'chart.js/auto';
import '../Css/Welcome.css';
import image from '../Assets/tokenomics.png';

const data = {
    datasets: [{
        label: [''],
        data: [30, 20, 5, 10, 3, 2, 15, 10, 5],
        backgroundColor: [
      '#ffffff',
      '#cccccc',
      '#b3b3b3',
      '#fae570',
      '#fecb4b',
      '#ffff01',
      '#f38e26',
      '#ef7013',
            '#fe0000',
        ],
        hoverOffset: 4,
        borderColor: '#fff',
        borderWidth: 2,
        hidden: false,
        indexAxis: 'x',
        parsing: {
            type: 'number'
        },
        // stack: 'myStack',
        xOffset: 0,
        yOffset: 0,
        fill: true,
        lineTension: 0.2,
        spanGaps: true,
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'circle',
        pointHoverStyle: 'rectRounded'
    }]
    };

const plugins = [{
        afterDatasetDraw: function(chart, args) {
            const ctx = chart.ctx;
            const dataset = [30, 20, 5, 10, 3, 2, 15, 10, 5];
            const meta = args.meta;
            
            for (let i = 0; i < dataset.length; i++) {
            const text = dataset[i];
            const arc = meta.data[i].getCenterPoint();

            ctx.font = '16px Poppins';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.fillText(text, arc.x, arc.y);
        }
    },
    beforeDraw: function(chart) {
        const ctx = chart.ctx;

        ctx.clearRect(0, 0, chart.width, chart.height);

        ctx.font = '24px Poppins';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fontWeight = 'bold';
        ctx.fillText('Total supply', chart.width / 2, chart.height / 2 - 10);
        ctx.fillText('10,000,000', chart.width / 2, chart.height / 2 + 20);
    },
    subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
    },
    
    
}];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  defaultFontFamily: 'Arial',
  elements: {
    arc: {
      backgroundColor: 'green',
    },
  },
  legend: {
    display: false
  },

  plugins: plugins,
};

const DoughnutChart = () => {
  return (
    <div>
    {/* <div style={{height: '100vh'}}>
        <Doughnut data={data} options={options} plugins={plugins}/>

    </div> */}
    <div class="" style={{height: ''}}>
    <div class="row">
        <div class="col-sm-12 col-lg-6 d-none d-lg-flex align-items-center justify-content-center" style={{height: ''}}>
            {/* <Doughnut data={data} options={options} plugins={plugins}/> */}
            <img src={image} style={{width: '100%', }} alt="Logo" />
        </div>
        <div class="col-sm-12 col-lg-6 d-block d-lg-none pb-4" style={{height: ''}}>
            {/* <Doughnut data={data} options={options} plugins={plugins}/> */}
            <img src={image} style={{width: '100%'}} alt="Logo" />
        </div>
        <div className='col-sm-12 col-lg-6 py-md-5 '>
        <div class="px-md-4 py-lg-5">

        {/* <div className='d-none'>
            <Doughnut data={data} options={options} plugins={plugins}/>
        </div> */}

        <div className='bg-dark rounded-4 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#ffffff"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>2% Airdrop</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>100% unlocked for community</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>200,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>

        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#cccccc"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>3% CEX Listing</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>unlocked as that when needed</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>300,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>


        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#b3b3b3"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>5% Initial Burn</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>To be burnt after launch</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>500,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>

        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#fae570"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>5% Charity</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>unlocked as needed</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>500,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>

        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#fecb4b"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>5% Marketing</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>unlocked as needed</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>500,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>


        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#ffff01"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>10% Team</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>20% vested monthly</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>1,000,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>


        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#f38e26"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>15% Foundation</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>8% unlocks at launch</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>1,500,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>


        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#ef7013"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>20% Liquidity</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>added to the pool at launch</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2'>

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>2,000,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>



        <div className='bg-dark rounded-4 mt-3 d-block justify-content-center align-items-center'>
          <div className='d-flex mb-0'>
            <div className='rounded-4' style={{width: "15px", backgroundColor: "#fe0000"}}></div>
            {/* <p className='mb-0 bg-danger' style={{width: "10px",}}>1</p> */}
            <div className='py-2' style={{flex: '1'}}>
              <div className='d-flex'>
                <div className='d-block p-2' style={{flex: '1'}}>
                  <h5 className='mb-0 text-light' style={{flex: '1', fontWeight: 'bold'}}>30% Treasury</h5>
                  <p className='mb-0 text-light' style={{fontSize: '12px'}}>1% vested monthly</p>
                </div>
                <div className='' style={{
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* <div className="bg-danger "> */}
                    <div className=' p-2 ' >

                      <div className='' style={{display: 'flex', justifyContent: 'end'}}><p className='mb-0 text-light' style={{fontSize: '15px'}}>Amount</p></div>
                      <p className='mb-0 text-light' style={{fontWeight: 'bold'}}>3,000,000</p>
                    </div>
                  {/* </div> */}
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>
        
        
        </div>
        </div>
    </div>
    </div>

    </div>
    
  );
};

export default DoughnutChart;
