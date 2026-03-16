import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import PageShell from '../components/PageShell';
import Platform from '../components/Platform';
import { PLATFORM_SCOPE, PLATFORM_WORKFLOW } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const CARD_WIDTH = W > 860 ? '48.5%' : '100%';

export default function PlatformPage() {
  return (
    <PageShell>
      <Platform />

      <View style={styles.section}>
        <Text style={styles.label}>Operational flow</Text>
        <View style={styles.flowGrid}>
          {PLATFORM_WORKFLOW.map(step => (
            <View key={step.title} style={styles.flowCard}>
              <Text style={styles.flowTitle}>{step.title}</Text>
              <Text style={styles.flowBody}>{step.body}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.scopeSection}>
        <Text style={styles.label}>Current scope</Text>
        <View style={styles.scopeGrid}>
          <View style={styles.scopeCard}>
            <Text style={styles.scopeTitle}>In scope now</Text>
            {PLATFORM_SCOPE.inScope.map(item => (
              <View key={item} style={styles.item}>
                <View style={styles.dot} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.scopeCardAlt}>
            <Text style={styles.scopeTitle}>Not in the current build</Text>
            {PLATFORM_SCOPE.outOfScope.map(item => (
              <View key={item} style={styles.item}>
                <View style={styles.dotAlt} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: PAD,
    paddingBottom: 40,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  scopeSection: {
    paddingHorizontal: PAD,
    paddingBottom: 60,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 12,
  },
  flowGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  flowCard: {
    width: CARD_WIDTH as any,
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: '#d9e4db',
    borderRadius: 14,
    padding: 22,
    gap: 10,
  },
  flowTitle: { fontSize: 20, fontWeight: '700', color: C.dark },
  flowBody: { fontSize: 15, lineHeight: 24, color: C.muted },
  scopeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  scopeCard: {
    width: CARD_WIDTH as any,
    backgroundColor: '#F5F2EB',
    borderRadius: 14,
    padding: 22,
    gap: 12,
  },
  scopeCardAlt: {
    width: CARD_WIDTH as any,
    backgroundColor: '#F7F8F5',
    borderRadius: 14,
    padding: 22,
    gap: 12,
  },
  scopeTitle: { fontSize: 20, fontWeight: '700', color: C.dark },
  item: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
    marginTop: 7,
  },
  dotAlt: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.amber,
    marginTop: 7,
  },
  itemText: { flex: 1, fontSize: 15, lineHeight: 24, color: C.muted },
});
