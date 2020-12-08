import React, { useState, useEffect, useRef } from 'react';
import { IconProps } from '../interfaces/interfaces'


const Icon: React.FC<IconProps> = ({ name, size=16, fill="#000" }): JSX.Element | null => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(():void => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`./icons/${name}.svg`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} />;
  }

  return null;
};

export default Icon;
