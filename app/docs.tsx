import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import { DOCS_SECTIONS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const CARD_WIDTH = W > 860 ? '48.5%' : '100%';

export default function Docs() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Docs"
        title="Working product documentation"
        description="This page summarizes the workflows and setup details currently described in the project documents."
      />

      <View style={styles.section}>
        <View style={styles.grid}>
          {DOCS_SECTIONS.map(section => (
            <View key={section.title} style={styles.card}>
              <Text style={styles.cardTitle}>{section.title}</Text>
              {section.items.map(item => (
                <View key={item} style={styles.item}>
                  <View style={styles.dot} />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </PageShell>
  );
}


const styles = StyleSheet.create({
  section: {
    paddingHorizontal: PAD,
    paddingBottom: 60,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  card: {
    width: CARD_WIDTH as any,
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: '#d9e4db',
    borderRadius: 14,
    padding: 24,
    gap: 14,
  },
  cardTitle: { fontSize: 20, fontWeight: '700', color: C.dark },
  item: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
    marginTop: 7,
  },
  itemText: { flex: 1, fontSize: 15, lineHeight: 24, color: C.muted },
  
});
