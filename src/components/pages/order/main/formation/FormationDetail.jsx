import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import photo from '../../../../../assets/handsome-male-entrepreneur-using-laptop.jpg'
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function FormationDetail() {
    const { formationName } = useParams();
    const [formation, setFormation] = useState(null);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState({}); // State pour gérer l'expansion des compétences
    

    useEffect(() => {
        const fetchFormation = async () => {
            try {
                const { data } = await axios.get(`http://localhost:1337/api/formations?filters[Name][$eq]=${formationName}&populate=*`);
                setFormation(data.data[0]);
                console.log(data.data)
            } catch(error) {
                setError(error);
            }
        }
      fetchFormation();
  }, [formationName]);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  if (!formation) {
    return <div>Loading...</div>;
  }
  const skills = formation.attributes.skills;
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <FormationDetailSyled className='formation-detail-container'>
      <div className='content-formation-detail'>
        <div className="formation-detail-content">
            <div className="formation-detail-content-left"> 
              <h1 className='formation-detail-title'>{formation.attributes.Name}</h1>
                <h3>Description</h3>
                <p>{formation.attributes.details}</p>
                <h3>Durée</h3>
                <p>{formation.attributes.duration}</p>
                <h3>Prix</h3>
                <p>{formation.attributes.price}</p>
                <Link to={'/signUp'} className='formation-detail-link'>S'inscrire</Link>
            </div>
            <div className="formation-detail-content-right">
              <img src={`http://localhost:1337${formation.attributes.image.data.attributes.url}`} alt="formation.attributes.Name" className='formation-detail-image' />
            </div>
        </div>
      </div>
      <div className="formation-maitriser">
        <h1 className='formation-detail-title'>Ce que tu maîtriseras</h1>
        <div className='formation-skills'>
          {skills.map((skill, index) => (
              <div key={index} className='skill-block'>
                  {skill.type === 'heading' && <h5>{skill.children[0].text}</h5>}
                  {skill.type === 'paragraph' && <p>{skill.children[0].text}</p>}
              </div>
          ))}
        </div>
      </div>
      <div className="apprentissage">
        <div className="apprentissage-left">
          <div className="apprentissage-left-block">
            <h1 className='formation-detail-title'>Apprends auprès d'instructeurs experts</h1>
            <p>Pas simplement des instructeurs experts dans leur domaine, mais également les enseignants les plus passionnés et engagés.</p>
          </div>
          <div className='apprentissage-small-block'>Petits groupes de 5 à 10, pour une expérience personnalisée</div>
          <div className='apprentissage-small-block'>Des instructeurs qui deviennent mentors qui te guident aussi</div>
          <div className='apprentissage-small-block'>Tout en t’accompagnant à chaque niveau d’apprentissage</div>
        </div>
        <div className="apprentissage-right">
          <img src={photo} alt="" className='formation-detail-image' />
        </div>
      </div>
    </FormationDetailSyled>
  )
}
const FormationDetailSyled = styled.div`
  /*border: 1px solid red;*/
  .content-formation-detail {
        /*border: 1px solid blue;*/
        padding: 100px;
        margin-bottom: 60px;
        margin-top: 70px;
        color: white;
        background-color: #000;
        background: radial-gradient(657px 657px at 2% 90%, #92b6fc 0, #dcf1f600 40%), radial-gradient(642px 642px at 82% 115%, #b4cdff 0, #dcf1f600 25%), linear-gradient(-73.25deg, #dcf2f7 7.43%, #9accd5 94.82%);
        color: #000;
    .formation-detail-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .formation-detail-content-left {
            display: flex;
            flex-direction: column;
            /*border: 1px solid green;*/
            margin-right: 100px;
            width: 50%;
            .formation-detail-title {
                font-size: 2.5rem;
                margin-bottom: 40px;
                text-align: left;
                
            }
            h3 {
                margin-top: 10px;
                font-size: 1.6rem;
                color: #ddd;
                color: #000;
            }
            p {
                color: #ccc;
                font-size: 17px;
                text-align: justify;
                margin-bottom: 10px;
                color: #333;
            }
            .formation-detail-link {
                border-radius: 5px;
                border: 1px solid transparent;
                padding: 10px;
                font-size: 1em;
                font-weight: 500;
                background-color: #1a1a1a;
                color: white;
                text-align: center;
                width: 150px;
                text-decoration: none;
                &:hover {
                    color: #1a1a1a;
                    background-color: white;
                }
            }
        }
        .formation-detail-content-right {
            .formation-detail-image {
                width: 100%;
                height: auto;
                margin-bottom: 20px;
                height: 400px;
                object-fit: cover;
            }
        }
    }
  }
  .formation-maitriser {
    width: 90%;
    margin: auto;
    margin-bottom: 60px;
    margin-top: 60px;
    .formation-detail-title {
        margin-bottom: 10px;
    }
    .formation-skills {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        .skill-block {
            flex: 1 1 calc(50% - 20px);
            //padding: 20px;
            //border: 1px solid #ddd;
            //border-radius: 10px;
            //background-color: #f9f9f9;
            //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            //transition: transform 0.2s, box-shadow 0.2s;
            /*&:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }*/
            h5 {
                margin: 0px;
                font-size: 18px;
                color: #444;
            }
            p {
                margin: 0;
                color: #555;
                text-align: justify;
            }
        }
    }
    }
    .apprentissage {
      width: 90%;
      margin: auto;
      border-radius: 10px;
    background-color: #000;
    padding: 50px 60px;
    line-height: 1.6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 100px;
    background: radial-gradient(657px 657px at 2% 90%, #92b6fc 0, #dcf1f600 40%), radial-gradient(642px 642px at 82% 115%, #b4cdff 0, #dcf1f600 25%), linear-gradient(-73.25deg, #dcf2f7 7.43%, #9accd5 94.82%);
    .apprentissage-left {
        margin-right: 100px;
        .apprentissage-left-block {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
        }
        .apprentissage-small-block {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
        }
    }
    .apprentissage-right {
        .formation-detail-image {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            height: 400px;
            object-fit: cover;
        }
    }
}
`;
