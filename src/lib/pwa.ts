export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export type PwaPlatform =
  | "ios-safari"
  | "ios-browser"
  | "android"
  | "desktop"
  | "other";

export type PwaEnvironment = {
  platform: PwaPlatform;
  isIOS: boolean;
  isIPhone: boolean;
  isIPad: boolean;
  isSafari: boolean;
  isStandalone: boolean;
  needsGuidedInstall: boolean;
  deviceLabel: string;
};

type AppleNavigator = Navigator & {
  standalone?: boolean;
};

export function getPwaEnvironment(windowObject: Window): PwaEnvironment {
  const navigatorObject = windowObject.navigator as AppleNavigator;
  const userAgent = navigatorObject.userAgent.toLowerCase();
  const isIPhone = /iphone/.test(userAgent);
  const isIPad =
    /ipad/.test(userAgent) ||
    (navigatorObject.platform === "MacIntel" &&
      navigatorObject.maxTouchPoints > 1);
  const isIOS = isIPhone || isIPad || /ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isSafari =
    /safari/.test(userAgent) &&
    !/crios|fxios|edgios|edga|opr\//.test(userAgent);
  const isStandalone =
    windowObject.matchMedia("(display-mode: standalone)").matches ||
    navigatorObject.standalone === true;

  let platform: PwaPlatform = "other";

  if (isIOS) {
    platform = isSafari ? "ios-safari" : "ios-browser";
  } else if (isAndroid) {
    platform = "android";
  } else if (/macintosh|windows|linux/.test(userAgent)) {
    platform = "desktop";
  }

  return {
    platform,
    isIOS,
    isIPhone,
    isIPad,
    isSafari,
    isStandalone,
    needsGuidedInstall: isIOS && !isStandalone,
    deviceLabel: isIPhone ? "iPhone" : isIPad ? "iPad" : "device",
  };
}

export function getInternalReturnPath(pathname?: string | null) {
  if (!pathname || !pathname.startsWith("/") || pathname === "/pwa") {
    return "/";
  }

  return pathname;
}

export function sanitizeReturnPath(value?: string | string[]) {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (
    !candidate ||
    !candidate.startsWith("/") ||
    candidate.startsWith("//") ||
    candidate === "/pwa"
  ) {
    return "/";
  }

  return candidate;
}
