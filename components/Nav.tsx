import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Href, Link, usePathname } from 'expo-router';

import { PRIMARY_NAV } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <Link href={'/' as Href} asChild>
          <TouchableOpacity style={styles.brand} onPress={() => setMenuOpen(false)}>
            <View style={styles.mark}>
              <View style={styles.glyph}>
                <View style={styles.centerDot} />
                <View style={[styles.outerDot, styles.dotTop]} />
                <View style={[styles.outerDot, styles.dotRight]} />
                <View style={[styles.outerDot, styles.dotBottom]} />
                <View style={[styles.outerDot, styles.dotLeft]} />
                <View style={[styles.spark, styles.sparkTopLeft]} />
                <View style={[styles.spark, styles.sparkTopRight]} />
                <View style={[styles.spark, styles.sparkBottomRight]} />
                <View style={[styles.spark, styles.sparkBottomLeft]} />
              </View>
            </View>
            <Text style={styles.brandName}>PestScout</Text>
          </TouchableOpacity>
        </Link>

        {W > 620 ? (
          <View style={styles.links}>
            {PRIMARY_NAV.map(link => (
              <Link key={link.href} href={link.href as Href} asChild>
                <TouchableOpacity onPress={() => setMenuOpen(false)}>
                  <Text style={[styles.link, pathname === link.href && styles.linkActive]}>
                    {link.label}
                  </Text>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        ) : (
          <TouchableOpacity
            style={styles.burger}
            onPress={() => setMenuOpen(open => !open)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View style={[styles.bLine, menuOpen && styles.bOpen1]} />
            <View style={[styles.bLine, menuOpen && { opacity: 0 }]} />
            <View style={[styles.bLine, menuOpen && styles.bOpen3]} />
          </TouchableOpacity>
        )}
      </View>

      {menuOpen && W <= 620 && (
        <View style={styles.dropdown}>
          {PRIMARY_NAV.map(link => (
            <Link key={link.href} href={link.href as Href} asChild>
              <TouchableOpacity style={styles.dropItem} onPress={() => setMenuOpen(false)}>
                <Text style={[styles.dropLink, pathname === link.href && styles.linkActive]}>
                  {link.label}
                </Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: C.white,
    paddingTop: 16,
    zIndex: 100,
    ...Platform.select({ web: { position: 'sticky' as any, top: 0 } }),
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: PAD,
    minHeight: 64,
    backgroundColor: 'rgba(255,255,255,0.98)',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(13,59,30,0.14)',
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  mark: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#24A06C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    width: 18,
    height: 18,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: C.white,
  },
  outerDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: C.white,
  },
  dotTop: { top: 1, left: 7.5 },
  dotRight: { top: 7.5, right: 1 },
  dotBottom: { bottom: 1, left: 7.5 },
  dotLeft: { top: 7.5, left: 1 },
  spark: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  sparkTopLeft: { top: 3, left: 3 },
  sparkTopRight: { top: 3, right: 3 },
  sparkBottomRight: { bottom: 3, right: 3 },
  sparkBottomLeft: { bottom: 3, left: 3 },
  brandName: { fontSize: 16, fontWeight: '700', color: C.dark, letterSpacing: -0.3 },
  links: { flexDirection: 'row', alignItems: 'center', gap: 32 },
  link: { fontSize: 20, color: C.green, fontWeight: '600', paddingHorizontal: 6 },
  linkActive: { color: C.forest },
  burger: { padding: 4, gap: 5 },
  bLine: {
    width: 22,
    height: 2,
    backgroundColor: C.green,
    borderRadius: 2,
  },
  bOpen1: { transform: [{ rotate: '45deg' }, { translateY: 7 }] },
  bOpen3: { transform: [{ rotate: '-45deg' }, { translateY: -7 }] },
  dropdown: {
    backgroundColor: C.white,
    paddingHorizontal: PAD,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(13,59,30,0.14)',
  },
  dropItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9e4db',
  },
  dropLink: { fontSize: 16, color: C.green, paddingVertical: 12, fontWeight: '600' },
});
