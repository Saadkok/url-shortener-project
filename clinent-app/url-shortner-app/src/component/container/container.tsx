import * as React from 'react';
import FormContainer from '../FormConatainer\'/FormConatainer';
import DataTable from '../data-table/DataTable';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/constants';
interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data ,setData] =  React.useState<UrlData[]>([]);
  const [reload, setReload] =React.useState<boolean>(false);
  const updateReloadState =():void =>
    {
      setReload(true);
    }


  const fetchTableData =async() =>{
    const response  = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The respone from server  is : " ,response);
    setData(response.data);
    console.log("Data : ",data)
    setReload(false);
  };

   React.useEffect(()=>{
    fetchTableData();

   },[reload]); 

  return (
    <>
     <FormContainer  updateReloadState={updateReloadState}/>
     <DataTable  updateReloadState={updateReloadState} data={data}/>
    </>
  );
};

export default Container; 
