import React , {useState} from 'react';
import { Divider, Steps } from 'antd';

const FormControl = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps
        progressDot
        current={1}
        items={[
          {
            title: 'Finished',
            description: 'This is a description.',
          },
          {
            title: 'In Progress',
            description: 'This is a description.',
          },
          {
            title: 'Waiting',
            description: 'This is a description.',
          },
        ]}
      />

    </>
  )
}
export default FormControl