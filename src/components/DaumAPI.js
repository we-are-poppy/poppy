import React from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function DaumAPI({ isOpen, close, setAddressText, setNextBool, setMessageBool }) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

    setAddressText(fullAddress);
    setNextBool(true);
    setMessageBool(false);
    close();
  };

  return (
    <>
      {isOpen && (
        <DaumPostcode
          style={''}
          onComplete={handleComplete}
          animation={false}
          height="100%"
          utoClose={true}
          autoResize={true}
        />
      )}
    </>
  );
}
