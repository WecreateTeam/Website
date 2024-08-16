import React, { useEffect } from 'react';

const MavaWidget: React.FC = () => {
  useEffect(() => {
    // This effect runs once when the component mounts
    const script = document.createElement('script');
    script.src = 'https://widget.mava.app';
    script.defer = true;
    script.id = 'MavaWebChat';
    script.setAttribute('widget-version', 'v2');
    script.setAttribute('enable-sdk', 'true');
    script.setAttribute('data-token', '3938b54bd46a7858ce75e6a4e42ac8fd4d902ec69a073224b4322d321c82cc9e');
    
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MavaWidget;