import React from 'react';
import "./Tech.css";
import cppImage from './imgs/cpp.png';
import pythonImage from './imgs/python.png';

import ros2Image from './imgs/ros2.png';  
import WebotImage from './imgs/webots.png';

import SolidworkImage from './imgs/solidworks.png';
import ProteusImage from './imgs/Proteus.png';
import AltiumImage from './imgs/altium.png';
import MatlabImage from './imgs/matlab.png';

import reactImage from './imgs/react.png';

import TensorImage from './imgs/tensor.png';
import pytorchImage from './imgs/pytorch.png';

import gitImage from './imgs/git.png';
import DockerImage from './imgs/docker.png';

export function TechStack() {
  return (

    <div>

    {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center "> TECH STACK </h2> */}
    <div className="nav-bar">
    <div className="flex h-full flex-col">
          <ul className="nav-list" >


          <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={AltiumImage}
                  loading="eager"
                  alt="Altium"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Altium</div>
              </div>
            </li>




            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={SolidworkImage}
                  loading="eager"
                  alt="Solidworks"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Solidworks</div>
              </div>
            </li>
            

            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={MatlabImage}
                  loading="eager"
                  alt="Matlab"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Matlab</div>
              </div>
            </li>



            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={ros2Image}
                  loading="eager"
                  alt="ROS 2"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>ROS 2</div>
              </div>
            </li>

            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={WebotImage}
                  loading="eager"
                  alt="webots"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Webots</div>
              </div>
            </li>

          </ul>

    </div>
    </div>


    <div className="nav-bar">
    <div className="flex h-full flex-col">
          <ul className="nav-list" >

          <li className="nav-item">
              <a  className="nav-item__link" >
                <img
                  src={cppImage}
                  loading="eager"
                  alt="c++"
                  className="image"
                />
              </a>
              <div  className="nav-item__tooltip">
                <div>C++</div>
              </div>
            </li>

            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={pythonImage}
                  loading="eager"
                  alt="python"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Python</div>
              </div>
            </li>

            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={reactImage}
                  loading="eager"
                  alt="React JS"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>React JS</div>
              </div>
            </li>

            {/* <li className="nav-item">
              <a href="#" className="nav-item__link">
                <img
                  src={pytorchImage}
                  loading="eager"
                  alt="pytorch"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Pytorch</div>
              </div>
            </li> */}


            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={TensorImage}
                  loading="eager"
                  alt="Tensorflow"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Tensorflow</div>
              </div>
            </li>

          </ul>



    </div>
    </div>

    <div className="nav-bar">
    <div className="flex h-full flex-col">
          <ul className="nav-list" >

          <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={gitImage}
                  loading="eager"
                  alt="Git"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Git</div>
              </div>
            </li>

            <li className="nav-item">
              <a  className="nav-item__link">
                <img
                  src={DockerImage}
                  loading="eager"
                  alt="Docker"
                  className="image"
                />
              </a>
              <div className="nav-item__tooltip">
                <div>Docker</div>
              </div>
            </li>

          </ul>



    </div>
    </div>


    </div>






  );
}