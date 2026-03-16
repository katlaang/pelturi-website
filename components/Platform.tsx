import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { PLATFORM_PILLARS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const IS_WIDE = W > 600;

export default function Platform() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Platform workflow</Text>
      <Text style={styles.heading}>Capture, review,{'\n'}respond, improve.</Text>
      <Text style={styles.sub}>
        Mofo is designed to move teams from field observation to treatment history with one
        consistent workflow across farms, sites, and scouting roles.
      </Text>

      <View style={styles.grid}>
        {PLATFORM_PILLARS.map(pillar => (
          <View
            key={pillar.step}
            style={[styles.card, { borderTopColor: pillar.color, borderTopWidth: 3 }]}
          >
            <Text style={[styles.step, { color: pillar.color }]}>{pillar.step}</Text>
            <Text style={[styles.name, { color: pillar.color }]}>{pillar.name}</Text>
            <Text style={styles.desc}>{pillar.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    paddingHorizontal: PAD,
    backgroundColor: '#F0EDE6',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 10,
  },
  heading: {
    fontSize: W > 600 ? 36 : 28,
    fontWeight: '700',
    color: C.dark,
    letterSpacing: -0.8,
    lineHeight: W > 600 ? 44 : 36,
    marginBottom: 12,
  },
  sub: {
    fontSize: 15,
    color: C.muted,
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: 620,
  },
  grid: {
    flexDirection: IS_WIDE ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    flex: IS_WIDE ? 1 : undefined,
    minWidth: IS_WIDE ? 180 : '100%',
    backgroundColor: C.white,
    borderRadius: 10,
    padding: 22,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  step: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 10,
  },
  desc: { fontSize: 13, color: C.muted, lineHeight: 20 },
});
