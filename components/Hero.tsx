import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import { C, HERO_SLIDES } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;

export default function Hero() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const fadeAnims = useRef(
    HERO_SLIDES.map((_, index) => new Animated.Value(index === 0 ? 1 : 0))
  ).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 900,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [textOpacity]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(previous => {
        const next = (previous + 1) % HERO_SLIDES.length;
        crossfade(previous, next);
        return next;
      });
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const crossfade = (from: number, to: number) => {
    Animated.timing(textOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.parallel([
        Animated.timing(fadeAnims[from], { toValue: 0, duration: 800, useNativeDriver: true }),
        Animated.timing(fadeAnims[to], { toValue: 1, duration: 800, useNativeDriver: true }),
      ]).start(() => {
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    });
  };

  const goSlide = (index: number) => {
    if (index === active) {
      return;
    }

    crossfade(active, index);
    setActive(index);
  };

  return (
    <View style={styles.hero}>
      {HERO_SLIDES.map((slide, index) => (
        <Animated.View key={index} style={[styles.imageFill, { opacity: fadeAnims[index] }]}>
          <Image source={slide.image} style={styles.imageFill} resizeMode="cover" />
        </Animated.View>
      ))}

      <View style={styles.overlay} />

      <Animated.View style={[styles.content, { opacity: textOpacity }]}>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>Offline-first scouting platform</Text>
        </View>

        <Text style={styles.headline}>{HERO_SLIDES[active].headline}</Text>
        <Text style={styles.sub}>{HERO_SLIDES[active].sub}</Text>

        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btnWhite}
            onPress={() => Linking.openURL('https://app.pelturi.com/login/')}
          >
            <Text style={styles.btnWhiteText}>View platform</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnGhost} onPress={() => router.push('/contact')}>
            <Text style={styles.btnGhostText}>Request demo</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.indicators}>
        {HERO_SLIDES.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goSlide(index)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <View style={[styles.ind, active === index && styles.indActive]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { height: 640, overflow: 'hidden', justifyContent: 'center' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5,18,8,0.54)',
  },
  content: { paddingHorizontal: PAD, paddingTop: 40, zIndex: 2 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 22,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.28)',
  },
  badgeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: C.mint },
  badgeText: { color: C.white, fontSize: 12, fontWeight: '500', letterSpacing: 0.8 },
  headline: {
    fontSize: W > 600 ? 54 : 38,
    fontWeight: '700',
    color: C.white,
    lineHeight: W > 600 ? 64 : 46,
    letterSpacing: -1.5,
    marginBottom: 16,
  },
  sub: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.76)',
    lineHeight: 26,
    marginBottom: 36,
    maxWidth: 480,
  },
  btns: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  btnWhite: {
    backgroundColor: C.white,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  btnWhiteText: { color: C.dark, fontSize: 14, fontWeight: '600' },
  btnGhost: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.46)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  btnGhostText: { color: C.white, fontSize: 14, fontWeight: '500' },
  indicators: {
    position: 'absolute',
    right: 24,
    top: '38%',
    flexDirection: 'column',
    gap: 10,
    zIndex: 5,
  },
  ind: {
    width: 3,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.32)',
    borderRadius: 2,
  },
  indActive: { backgroundColor: C.white, height: 46 },
  imageFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
