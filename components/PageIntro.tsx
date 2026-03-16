import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 52,
    paddingBottom: 24,
    paddingHorizontal: PAD,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: C.green,
    marginBottom: 12,
  },
  title: {
    fontSize: W > 600 ? 44 : 32,
    lineHeight: W > 600 ? 52 : 40,
    fontWeight: '700',
    color: C.dark,
    letterSpacing: -1,
    marginBottom: 14,
    maxWidth: 760,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: C.muted,
    maxWidth: 720,
  },
});
