import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

import Tags from './Tags';

@Entity('tools')
class Tools {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @ManyToMany(() => Tags, tags => tags.name, { eager: true, cascade: true })
  @JoinTable({
    name: 'tools_tags',
    joinColumns: [{ name: 'tool_id' }],
    inverseJoinColumns: [{ name: 'tag_id' }]
  })
  tags: Tags[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tools;
