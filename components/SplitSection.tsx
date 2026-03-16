import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const IS_WIDE = W > 700;

interface SplitSectionProps {
  // Accept either a local require() or a remote URI string
  image: ImageSourcePropType;
  label: string;
  headline: string;
  body1: string;
  body2: string;
  reverse?: boolean;
  bgColor?: string;
}

export default function SplitSection({
  image, label, headline, body1, body2, reverse = false, bgColor = C.white,
}: SplitSectionProps) {
  return (
    <View style={[styles.wrap, { backgroundColor: bgColor }]}>
      <View
        style={[
          styles.inner,
          IS_WIDE && { flexDirection: reverse ? 'row-reverse' : 'row' },
        ]}
      >
        <View style={[styles.imgWrap, IS_WIDE && { flex: 1 }]}>
          <Image source={image} style={styles.img} resizeMode="cover" />
        </View>

        <View style={[styles.textBlock, IS_WIDE && { flex: 1 }]}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.h}>{headline}</Text>
          <Text style={styles.body}>{body1}</Text>
          <Text style={styles.body}>{body2}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 56 },
  inner: {
    flexDirection: 'column',
    paddingHorizontal: PAD,
    gap: IS_WIDE ? 48 : 28,
    alignItems: IS_WIDE ? 'center' : 'stretch',
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  imgWrap: {
    borderRadius: 12, overflow: 'hidden',
    height: IS_WIDE ? 380 : 220,
    width: IS_WIDE ? undefined : '100%',
  },
  img: { width: '100%', height: '100%' },
  textBlock: {},
  label: {
    fontSize: 11, fontWeight: '600', textTransform: 'uppercase',
    letterSpacing: 1.5, color: C.green, marginBottom: 10,
  },
  h: {
    fontSize: W > 600 ? 28 : 22, fontWeight: '700', color: C.dark,
    letterSpacing: -0.6, lineHeight: W > 600 ? 36 : 30, marginBottom: 14,
  },
  body: { fontSize: 15, color: C.muted, lineHeight: 24, marginBottom: 12 },
});
