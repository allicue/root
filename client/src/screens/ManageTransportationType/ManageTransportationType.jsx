import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditTransportationType from '../../components/EditTransportationType/EditTransportationType';
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import Icon from '../../Assets/Icons/ROOT_Add_Note_Icon.png';
import Leaf from '../../Assets/Icons/ROOT_Leaf.png';
import './ManageTransportationType.css';
import { getTransportationTypes } from '../../services/transportationTypes';

export default function ManageTransportationTypes() {
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [transportationTypes, setTransportationTypes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const types = await getTransportationTypes();
      setTransportationTypes(types);
      setLoaded(true);
    }
    getData();
  }, [updated]);


  if (!loaded) {
    return <div className="loading">
      <h1 >Loading</h1>
      <img className="leaf" src={Leaf} alt="leaf" />
      <img className="leaf" src={Leaf} alt="leaf" />
      <img className="leaf" src={Leaf} alt="leaf" />
    </div>
  };

  const UPDATETYPES = transportationTypes.map(item =>
    <EditTransportationType
      key={item._id}
      id={item._id}
      title={item.title.toUpperCase()}
      imgURL={item.imgURL}
      description={item.description}
      updated={updated}
      setUpdated={setUpdated} />
  )

  return (
    <Layout>
      <LogoBanner title="Climate Impact By Transportation Type - Manage Page" />
      <span className="add-icon-link" >
        <Link to="/add-transportation-type">
          <img className="add-icon" alt="Edit Icon" src={Icon} /></Link>
        <p id="add-icon-text">Missing something? Add your favorite mode of transportation <Link id="add-link" to="/add-transportation-type">here </Link></p>
      </span>
      <div className="manage-parent" >
        <div className="edit-transportation-types">{UPDATETYPES}</div>
      </div>
    </Layout>
  );
};