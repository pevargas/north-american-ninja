///////////////////////////////////////////////////////////////////////////////
//  File: splash_page                      Dec 2014
//  Description:
//    This sketch will reside on my portfolio's homepage since I hate talking 
//    about myself, lol
///////////////////////////////////////////////////////////////////////////////

color orb_color(float size)
{
  if ( size > 75 )
  {
    return color( 0, 165, 201, random(50) + 200 );
  }

  return color( 153, 153, 153, random(50) + 200 );
}

///////////////////////////////////////////////////////////////////////////////
class Orb
{
  float m_px, m_py;
  float m_vx, m_vy;
  float m_size;
  float m_angle;
  float m_vel;
  color m_color;
  
  Orb()
  {
    m_size  = random(2) * 25 + 50;
    m_angle = radians(random(360));
    m_vx    = cos(m_angle);
    m_vy    = sin(m_angle);
    m_px    = random(m_size, width - m_size);
    m_py    = random(m_size, height - m_size);
    m_color = orb_color(m_size);
    m_vel   = 1;
  }
  
  void draw()
  {
    fill( m_color );
    ellipse( m_px, m_py,  m_size, m_size);
  }
  
  void move()
  {
    m_px += m_vx * pow( 2, m_vel );
    m_py += m_vy * pow( 2, m_vel ); 
  }
  void update()
  {
    int half = m_size / 2;
    if ( ( m_px - half ) < 0 || width < ( m_px + half ) )
    {
      m_vx *= -1;
      move();
    }

    if ( ( m_py - half ) < 0 || height < ( m_py + half ) )
    {
      m_vy *= -1;
      move();
    }

    if ( pow( mouseX - m_px, 2 ) + pow( mouseY - m_py, 2) < pow( half, 2 ) )
    {
      m_vel = 5;
      m_vx *= -1;
      m_vy *= -1;
      move();
    }
    if ( m_vel > 1 )
    {
      m_vel -= 0.1;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////

Orb[] orbs;
///////////////////////////////////////////////////////////////////////////////
void setup( )
{
  size ( window.innerWidth, 500 );
  noStroke( );
  rectMode( CENTER );
  fill( 0, 165, 201 ); 
  orbs = new Orb[40];
  for ( int i = 0; i < 40; ++i )
  {
    orbs[i] = new Orb();
  }
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
void draw( )
{
  background( 255 );
  for( Orb o : orbs )
  {
    o.draw();
    o.update();
    o.move();
  }

}
///////////////////////////////////////////////////////////////////////////////


