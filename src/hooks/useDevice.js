'use client';
import { useState, useEffect } from 'react';
import { isMobile as mobile } from 'react-device-detect';

export default function useDevice() {
  const [state, setState] = useState({
    loading: true,
    isMobile: null,
  });

  useEffect(() => {
    mobile
      ? setState({ loading: false, isMobile: true })
      : setState({ loading: false, isMobile: false });
  }, [mobile]);

  if (state.loading) {
    return [undefined, true];
  }

  return [state.isMobile, state.loading];
}
