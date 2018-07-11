export interface HSL {
  h: number,
  s: number,
  l: number
}
export class ColorUtil {
  // https://stackoverflow.com/questions/17433015/change-the-hue-of-a-rgb-color-in-javascript
  // Changes the RGB/HEX temporarily to a HSL-Value, modifies that value
  // and changes it back to RGB/HEX.

  public static changeHue(rgb: string, degree: number): string {
    var hsl = ColorUtil.rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h >= 0) {
      hsl.h = hsl.h % 360;
    } else {
      hsl.h = 360 + (hsl.h % 360);
    }
    return ColorUtil.hslToRGB(hsl);
  }

  // exepcts a string and returns an object
  public static rgbToHSL(rgb: string): HSL {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (rgb.length == 3) {
      rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
      g = parseInt(rgb.substr(2, 2), 16) / 255,
      b = parseInt(rgb.substr(4, 2), 16) / 255,
      cMax = Math.max(r, g, b),
      cMin = Math.min(r, g, b),
      delta = cMax - cMin,
      l = (cMax + cMin) / 2,
      h = 0,
      s = 0;

    if (delta == 0) {
      h = 0;
    } else if (cMax == r) {
      h = 60 * (((g - b) / delta) % 6);
    } else if (cMax == g) {
      h = 60 * (((b - r) / delta) + 2);
    } else {
      h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
      s = 0;
    } else {
      s = (delta / (1 - Math.abs(2 * l - 1)))
    }

    return {
      h: h,
      s: s,
      l: l
    };
  }

  // expects an object and returns a string
  public static hslToRGB(hsl: HSL): string {
    var h = hsl.h,
      s = hsl.s,
      l = hsl.l,
      c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r, g, b;

    if (h < 60) {
      r = c;
      g = x;
      b = 0;
    }
    else if (h < 120) {
      r = x;
      g = c;
      b = 0;
    }
    else if (h < 180) {
      r = 0;
      g = c;
      b = x;
    }
    else if (h < 240) {
      r = 0;
      g = x;
      b = c;
    }
    else if (h < 300) {
      r = x;
      g = 0;
      b = c;
    }
    else {
      r = c;
      g = 0;
      b = x;
    }

    r = ColorUtil.normalize_rgb_value(r, m);
    g = ColorUtil.normalize_rgb_value(g, m);
    b = ColorUtil.normalize_rgb_value(b, m);

    return ColorUtil.rgbToHex(r, g, b);
  }

  private static normalize_rgb_value(color, m): number {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
      color = 0;
    }
    return color;
  }

  public static rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
