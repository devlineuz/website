"use client";

import React, { ReactNode } from "react";
import "../../i18n/config";

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>;
}
